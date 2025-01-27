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
        :title="product.name"
        :to="`/products/${product.id}`"
        link
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
      ></v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const products = ref([
  {
    id: 1,
    name: 'Футболка'
  },
  {
    id: 2,
    name: 'Джинсы'
  },
  {
    id: 3,
    name: 'Бейсболка'
  },
  {
    id: 4,
    name: 'Кеды'
  }
])

const filterText = ref('')

const filteredProducts = computed(() => products.value.filter((p) => p.name.toLowerCase().includes(filterText.value.toLowerCase())))
</script>

<style scoped>

</style>