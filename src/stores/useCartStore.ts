import { create } from "zustand";
import type { CartItem, CartStore } from "@/types/cart.ts";

const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addToCart: (product) => {
    const { items } = get();
    const existingItemIndex = items.findIndex((item) => item.id === product.id);

    if (existingItemIndex > -1) {
      const updatedItems = items.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      set({ items: updatedItems });
    } else {
      const newCartItem: CartItem = {
        ...product,
        quantity: 1,
      };
      set({ items: [...items, newCartItem] });
    }
  },

  removeFromCart: (productId: string) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
  },

  updateQuantity: (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      get().removeFromCart(productId);
      return;
    }

    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item,
      ),
    }));
  },

  clearCart: () => {
    set({ items: [] });
  },

  getTotalItems: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    const { items } = get();
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));

export default useCartStore;
