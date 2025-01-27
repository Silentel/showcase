import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as number[],
  }),
  actions: {
    add(number: number) {
      this.cart.push(number)
    },
  },
})