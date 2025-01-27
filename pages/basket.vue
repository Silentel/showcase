<template>
  <h1>
    Корзина
  </h1>
  <div class="d-flex justify-center">{{ cartStore.cart }}</div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>
