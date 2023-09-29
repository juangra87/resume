<script setup lang="ts">

import Header from "~/components/resume/Header.vue";
import Section from "~/components/resume/Section.vue";
import Footer from "~/components/resume/Footer.vue";
import NavigationMenu from "~/components/resume/NavigationMenu.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <Header/>
    <NavigationMenu/>
    <Section/>
    <Footer/>
  </v-layout>
</template>

<style scoped>

</style>
