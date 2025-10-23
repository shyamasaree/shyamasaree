/**
 * Shiprocket API Integration
 * Documentation: https://apidocs.shiprocket.in/
 */

const SHIPROCKET_API_BASE = 'https://apiv2.shiprocket.in/v1/external';

interface ShiprocketAuthResponse {
  token: string;
}

interface ShiprocketOrder {
  order_id: string;
  order_date: string;
  pickup_location: string;
  billing_customer_name: string;
  billing_last_name: string;
  billing_address: string;
  billing_city: string;
  billing_pincode: string;
  billing_state: string;
  billing_country: string;
  billing_email: string;
  billing_phone: string;
  shipping_is_billing: boolean;
  order_items: Array<{
    name: string;
    sku: string;
    units: number;
    selling_price: number;
  }>;
  payment_method: 'Prepaid' | 'COD';
  sub_total: number;
  length: number;
  breadth: number;
  height: number;
  weight: number;
}

class ShiprocketService {
  private token: string | null = null;
  private tokenExpiry: number | null = null;

  /**
   * Authenticate with Shiprocket
   */
  async authenticate(): Promise<string> {
    // Check if token is still valid
    if (this.token && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.token;
    }

    const email = import.meta.env.VITE_SHIPROCKET_EMAIL;
    const password = import.meta.env.VITE_SHIPROCKET_PASSWORD;

    if (!email || !password) {
      throw new Error('Shiprocket credentials not configured');
    }

    try {
      const response = await fetch(`${SHIPROCKET_API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Shiprocket authentication failed');
      }

      const data: ShiprocketAuthResponse = await response.json();
      this.token = data.token;
      // Token valid for 10 days, but we'll refresh after 9 days
      this.tokenExpiry = Date.now() + 9 * 24 * 60 * 60 * 1000;

      return this.token;
    } catch (error) {
      console.error('Shiprocket auth error:', error);
      throw error;
    }
  }

  /**
   * Create an order in Shiprocket
   */
  async createOrder(orderData: ShiprocketOrder): Promise<any> {
    const token = await this.authenticate();

    try {
      const response = await fetch(`${SHIPROCKET_API_BASE}/orders/create/adhoc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to create Shiprocket order');
      }

      return await response.json();
    } catch (error) {
      console.error('Shiprocket create order error:', error);
      throw error;
    }
  }

  /**
   * Get available courier services for delivery
   */
  async getAvailableCouriers(
    pickup_postcode: string,
    delivery_postcode: string,
    weight: number,
    cod: boolean = false
  ): Promise<any> {
    const token = await this.authenticate();

    try {
      const params = new URLSearchParams({
        pickup_postcode,
        delivery_postcode,
        weight: weight.toString(),
        cod: cod ? '1' : '0',
      });

      const response = await fetch(
        `${SHIPROCKET_API_BASE}/courier/serviceability/?${params}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch courier services');
      }

      return await response.json();
    } catch (error) {
      console.error('Shiprocket get couriers error:', error);
      throw error;
    }
  }

  /**
   * Track shipment by order ID or AWB number
   */
  async trackShipment(shipment_id: string): Promise<any> {
    const token = await this.authenticate();

    try {
      const response = await fetch(
        `${SHIPROCKET_API_BASE}/courier/track/shipment/${shipment_id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to track shipment');
      }

      return await response.json();
    } catch (error) {
      console.error('Shiprocket track shipment error:', error);
      throw error;
    }
  }

  /**
   * Calculate shipping rate
   */
  async calculateShippingRate(
    pickup_postcode: string,
    delivery_postcode: string,
    weight: number,
    cod: boolean = false
  ): Promise<number> {
    try {
      const couriers = await this.getAvailableCouriers(
        pickup_postcode,
        delivery_postcode,
        weight,
        cod
      );

      if (!couriers.data || couriers.data.available_courier_companies.length === 0) {
        throw new Error('No courier services available for this route');
      }

      // Return the cheapest rate
      const rates = couriers.data.available_courier_companies.map((c: any) => c.rate);
      return Math.min(...rates);
    } catch (error) {
      console.error('Shiprocket calculate rate error:', error);
      // Return default rate as fallback
      return 50; // ₹50 default
    }
  }

  /**
   * Cancel shipment
   */
  async cancelShipment(order_ids: string[]): Promise<any> {
    const token = await this.authenticate();

    try {
      const response = await fetch(`${SHIPROCKET_API_BASE}/orders/cancel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ ids: order_ids }),
      });

      if (!response.ok) {
        throw new Error('Failed to cancel shipment');
      }

      return await response.json();
    } catch (error) {
      console.error('Shiprocket cancel shipment error:', error);
      throw error;
    }
  }

  /**
   * Check pincode serviceability
   */
  async checkPincodeServiceability(pincode: string): Promise<boolean> {
    const token = await this.authenticate();

    try {
      const response = await fetch(
        `${SHIPROCKET_API_BASE}/courier/serviceability/?pickup_postcode=486001&delivery_postcode=${pincode}&cod=1&weight=1`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      return data.data && data.data.available_courier_companies.length > 0;
    } catch (error) {
      console.error('Shiprocket check pincode error:', error);
      return false;
    }
  }
}

// Export singleton instance
export const shiprocketService = new ShiprocketService();
export default shiprocketService;
