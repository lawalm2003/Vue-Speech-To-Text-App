<template>
  <div @click="toggle" class="checkboxtoggler ">
    <div :class="['line', { active1: isActive }]"></div>
    <div :class="['line', { active2: isActive }]"></div>
    <div :class="['line', { active3: isActive }]"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref<boolean>(false);

const toggle = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>
.checkboxtoggler {
  width: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 0.35em;
  cursor: pointer;
}

.line {
  background: #fff;
  height: 0.1em;
  border-radius: 10em;
  transition: all 0.5s ease;
}

/* Transforms when active */
.active1 {
  transform: rotate(45deg) translate(0.15em, 0.15em);
}

.active2 {
  transform: rotate(-45deg) translate(0.15em, -0.15em);
}

.active3 {
  transform: scaleX(0);
  transform-origin: left;
}
</style>
