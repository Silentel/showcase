<template>
  <div class="text-center">
    ID - {{ $route.params.id }}
  </div>
  <div class="d-flex justify-center">
    <v-btn @click="cartStore.add(Number($route.params.id))">Добавить в корзину</v-btn>
  </div>
</template>
<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
</script>
