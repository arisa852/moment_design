<script setup>
import { defineProps } from 'vue'

defineProps({
  image: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  date: {
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
  },
  tags: {
    type: Array,
    default: () => []
  },
  commentNum: {
    type: Number,
    default: 0
  },
  likeNum: {
    type: Number,
    default: 0
  }
})

</script>
<template>
  <div class="bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.1)] p-5 flex flex-col gap-2">
    <div class="flex items-center gap-2">
      <img :src="image" alt="avatar" class="w-10 h-10 rounded-full object-cover">
      <div class="flex flex-col">
        <span class="font-bold">{{ name }}</span>
        <span class="text-grey text-sm">{{ date }}</span>
      </div>
    </div>
    <div>
      <h2 class="text-xl font-bold mb-3">{{ title }}</h2>
      <p class="mb-3 text-[#666]">{{ desc }}</p>
      <div class="flex gap-2 mb-2">
        <span v-for="(tag, idx) in tags" :key="idx" class="bg-tagColor rounded py-1 px-2 text-sm">{{ tag }}</span>
      </div>
    </div>
    <div class="flex gap-2 text-grey text-sm">
      <span>{{ commentNum }}</span> <span>留言</span> <span>{{ likeNum }}</span> <span>喜歡</span>
    </div>
  </div>
</template>