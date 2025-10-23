/**
 * Google Analytics 4 Helper Functions
 * Track custom events and conversions
 */

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Track page view
 */
export const trackPageView = (url: string, title: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'page_view', {
      page_title: title,
      page_location: url,
      page_path: url,
    });
  }
};

/**
 * Track custom event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * E-commerce Events
 */

// View item (product detail page)
export const trackViewItem = (product: {
  id: string;
  name: string;
  price: number;
  category?: string;
  brand?: string;
}) => {
  trackEvent('view_item', {
    currency: 'INR',
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        item_brand: product.brand || 'Shyamasaree',
        price: product.price,
      },
    ],
  });
};

// Add to cart
export const trackAddToCart = (product: {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category?: string;
}) => {
  trackEvent('add_to_cart', {
    currency: 'INR',
    value: product.price * product.quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        item_category: product.category,
        price: product.price,
        quantity: product.quantity,
      },
    ],
  });
};

// Remove from cart
export const trackRemoveFromCart = (product: {
  id: string;
  name: string;
  price: number;
  quantity: number;
}) => {
  trackEvent('remove_from_cart', {
    currency: 'INR',
    value: product.price * product.quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity: product.quantity,
      },
    ],
  });
};

// Add to wishlist
export const trackAddToWishlist = (product: {
  id: string;
  name: string;
  price: number;
}) => {
  trackEvent('add_to_wishlist', {
    currency: 'INR',
    value: product.price,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
      },
    ],
  });
};

// Begin checkout
export const trackBeginCheckout = (
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>,
  totalValue: number
) => {
  trackEvent('begin_checkout', {
    currency: 'INR',
    value: totalValue,
    items: items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
  });
};

// Purchase conversion
export const trackPurchase = (
  transactionId: string,
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    category?: string;
  }>,
  totalValue: number,
  tax?: number,
  shipping?: number
) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    currency: 'INR',
    value: totalValue,
    tax: tax || 0,
    shipping: shipping || 0,
    items: items.map((item) => ({
      item_id: item.id,
      item_name: item.name,
      item_category: item.category,
      price: item.price,
      quantity: item.quantity,
    })),
  });
};

// Search
export const trackSearch = (searchTerm: string) => {
  trackEvent('search', {
    search_term: searchTerm,
  });
};

// View promotion
export const trackViewPromotion = (
  promotionId: string,
  promotionName: string
) => {
  trackEvent('view_promotion', {
    promotion_id: promotionId,
    promotion_name: promotionName,
  });
};

// Select promotion
export const trackSelectPromotion = (
  promotionId: string,
  promotionName: string
) => {
  trackEvent('select_promotion', {
    promotion_id: promotionId,
    promotion_name: promotionName,
  });
};

/**
 * User Engagement Events
 */

// Sign up
export const trackSignUp = (method: string = 'email') => {
  trackEvent('sign_up', {
    method: method,
  });
};

// Login
export const trackLogin = (method: string = 'email') => {
  trackEvent('login', {
    method: method,
  });
};

// Share
export const trackShare = (
  method: string,
  contentType: string,
  itemId: string
) => {
  trackEvent('share', {
    method: method,
    content_type: contentType,
    item_id: itemId,
  });
};

// Contact
export const trackContact = (method: string = 'form') => {
  trackEvent('contact', {
    method: method,
  });
};

// Newsletter signup
export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', {
    method: 'website',
  });
};

// View size guide
export const trackViewSizeGuide = () => {
  trackEvent('view_size_guide');
};

// View policy
export const trackViewPolicy = (policyType: string) => {
  trackEvent('view_policy', {
    policy_type: policyType,
  });
};

// FAQ interaction
export const trackFAQView = (question: string) => {
  trackEvent('faq_view', {
    question: question,
  });
};

// Bulk order inquiry
export const trackBulkOrderInquiry = () => {
  trackEvent('bulk_order_inquiry');
};

/**
 * Video Events
 */
export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('video_start', {
    video_title: videoTitle,
  });
};

export const trackVideoComplete = (videoTitle: string) => {
  trackEvent('video_complete', {
    video_title: videoTitle,
  });
};

/**
 * Error Tracking
 */
export const trackError = (
  errorMessage: string,
  errorLocation: string,
  isFatal: boolean = false
) => {
  trackEvent('exception', {
    description: errorMessage,
    location: errorLocation,
    fatal: isFatal,
  });
};

// Export all tracking functions
export default {
  trackPageView,
  trackEvent,
  trackViewItem,
  trackAddToCart,
  trackRemoveFromCart,
  trackAddToWishlist,
  trackBeginCheckout,
  trackPurchase,
  trackSearch,
  trackViewPromotion,
  trackSelectPromotion,
  trackSignUp,
  trackLogin,
  trackShare,
  trackContact,
  trackNewsletterSignup,
  trackViewSizeGuide,
  trackViewPolicy,
  trackFAQView,
  trackBulkOrderInquiry,
  trackVideoPlay,
  trackVideoComplete,
  trackError,
};
