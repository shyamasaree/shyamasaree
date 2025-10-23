import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../data/products';

export interface CartItem extends Product {
  quantity: number;
  selectedColor: string;
}

interface CartStore {
  items: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, selectedColor: string) => void;
  removeFromCart: (id: string, selectedColor: string) => void;
  updateQuantity: (id: string, selectedColor: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getCartTotal: () => number;
  getCartCount: () => number;
  getCartDiscount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],

      addToCart: (product, selectedColor) => {
        const items = get().items;
        const existingItem = items.find(
          (item) => item.id === product.id && item.selectedColor === selectedColor
        );

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id && item.selectedColor === selectedColor
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            items: [...items, { ...product, quantity: 1, selectedColor }],
          });
        }
      },

      removeFromCart: (id, selectedColor) => {
        set({
          items: get().items.filter(
            (item) => !(item.id === id && item.selectedColor === selectedColor)
          ),
        });
      },

      updateQuantity: (id, selectedColor, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id, selectedColor);
          return;
        }

        set({
          items: get().items.map((item) =>
            item.id === id && item.selectedColor === selectedColor
              ? { ...item, quantity }
              : item
          ),
        });
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleWishlist: (productId) => {
        const wishlist = get().wishlist;
        if (wishlist.includes(productId)) {
          set({ wishlist: wishlist.filter((id) => id !== productId) });
        } else {
          set({ wishlist: [...wishlist, productId] });
        }
      },

      isInWishlist: (productId) => {
        return get().wishlist.includes(productId);
      },

      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },

      getCartCount: () => {
        return get().items.reduce((count, item) => count + item.quantity, 0);
      },

      getCartDiscount: () => {
        return get().items.reduce(
          (discount, item) => discount + (item.mrp - item.price) * item.quantity,
          0
        );
      },
    }),
    {
      name: 'shyamasaree-cart',
    }
  )
);
