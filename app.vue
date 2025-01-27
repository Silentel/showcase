<template>
  <v-layout>
    <v-app-bar>
      <v-app-bar-title><NuxtLink to="/" class="text-black text-decoration-none">Витрина</NuxtLink></v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <v-list-item title="Каталог" to="/catalog"></v-list-item>
        <v-list-item title="Корзина" to="/basket"></v-list-item>
        <v-list-item title="Контакты" to="/contacts"></v-list-item>
      </template>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <NuxtPage />
      </v-container>
    </v-main>
  </v-layout>
</template>
