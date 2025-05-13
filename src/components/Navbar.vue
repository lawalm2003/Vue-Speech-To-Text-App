<template>
  <nav class="py-3 px-2 bg-dim-gray text-white fixed w-full">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mic-icon lucide-mic"
        >
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
        <h1 class="text-lg font-bold">Speech2TextConverter</h1>
      </div>
      <ul class="hidden sm:flex gap-8">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/speech-input">Speech Input</RouterLink></li>
      </ul>
      <div class="md:hidden ">
        <Hamburger @click="toggleNav"/>
      </div>
    </div>
    <div :class="['md:hidden overflow-hidden max-h-0 animation', isOpen && 'max-h-[300px]']">
      <ul class="px-2 mt-3 flex flex-col gap-2">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/speech-input">Speech Input</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import Hamburger from './Hamburger.vue'
import { ref } from 'vue';

const isOpen = ref<boolean>(false);

const toggleNav = () => {
  isOpen.value = !isOpen.value;
};
</script>