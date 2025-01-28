<template>
  <v-card
    class="mx-auto my-12"
    max-width="600"
  >
    <v-img
      height="250"
      :src="product.images[0]"
      cover
    ></v-img>
    <v-card-item>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-subtitle>
        <span class="me-1">{{ product.category.name }}</span>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <div>{{ product.description }}</div>
    </v-card-text>
    <v-card-actions>      
      <v-btn
        v-if="!cartStore.cart.includes(Number($route.params.id))"
        class="btn"
        color="blue"
        @click="cartStore.add(Number($route.params.id))"
      >Добавить в корзину</v-btn>
      <v-btn
        v-else
        class="btn"
        color="red"
        @click="cartStore.delete(Number($route.params.id))"
      >Удалить из корзины</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cartStore = useCartStore()
const route = useRoute()
const { data: product } = await useFetch('https://api.escuelajs.co/api/v1/products/' + route.params.id)
</script>

<style scoped>
.btn {
  width: 199%;
}
</style>