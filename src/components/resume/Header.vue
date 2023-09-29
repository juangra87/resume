<script setup lang="ts">

const availableLocales = computed(() => {
  return useI18n().availableLocales
})
</script>

<template>
  <v-app-bar :title="$t('header.title')">

    <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        >{{ locale.name }}</nuxt-link>

  </v-app-bar>
</template>

<style scoped>

</style>
