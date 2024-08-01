<script setup>
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  }
})

</script>

<template>
  <a-card>
    <img class="w-20 h-20 object-cover mx-auto mb-5" :src="image" alt="img">
    <h2 class="text-xl font-bold text-center mb-2">{{ title }}</h2>
    <p class="text-base text-center">{{ desc }}</p>
  </a-card>
</template>