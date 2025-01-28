<template>
  <h1>
    Каталог
  </h1>
  <v-text-field
    v-model="filterText"
    label="Фильтр"
  ></v-text-field>
  <v-row>
    <v-col
      v-for="product in filteredProducts"
      :key="product.id"
    >
      <v-card
        :title="product.title"
        :to="`/products/${product.id}`"
        link
        :text="product.description.length > 48 ? product.description.slice(0, 48) + '...' : product.description"
        class="card"
      ></v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const { data: products } = await useFetch('https://api.escuelajs.co/api/v1/products')
const filterText = ref('')

const filteredProducts = computed(() => products.value.filter((p) => p.title.toLowerCase().includes(filterText.value.toLowerCase())))
</script>

<style scoped>
.card {
  width: 400px;
}
</style>