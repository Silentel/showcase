import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as number[],
  }),
  actions: {
    add(id: number) {
      this.cart.push(id)
    },
    delete(id: number) {
      this.cart = this.cart.filter(p => p !== id)
    },
  },
})