<template>
  <h1>
    Корзина
  </h1>
  <div
    v-if="!cartStore.cart.length"
    class="d-flex justify-center"
  >Корзина пуста</div>
  <div
    v-for="product in cartStore.cart"
    :key="product"
    class="d-flex justify-center ma-4"
  >
    <div class="d-flex align-center">
      <div class="mr-2">{{ product }}</div>
      <v-btn
        color="red"
        density="compact"
        icon="mdi-minus"
        size="xs"
        @click="cartStore.delete(product)"
      ></v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>
