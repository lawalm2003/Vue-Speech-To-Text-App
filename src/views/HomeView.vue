<template>
  <main>
    <div class="flex flex-col justify-center items-center pt-20">
      <img src="../assets/homeimg.png" alt="Home image" class="max-h-100 mb-10">
      <h1 class="text-2xl font-bold mb-6">Welcome to Speech2TextConverter</h1>
      <p class="max-w-[790px] text-center mb-6">
        Easily convert your speech into text with our state-of-the-art service.
        get accurate transcriptions in seconds with our user-friendly interface
        and powerful technology
      </p>
      <button
        @click="goToSpeechInput"
        class="bg-black text-white text-sm px-3 py-2.5 rounded-xl cursor-pointer"
      >
        Proceed to Speech Input
      </button>
    </div>
    <div class="bg-white-smoke flex flex-col items-center pt-10 pb-16 mt-14">
      <h1 class="text-2xl font-bold mb-10">Why Choose Us?</h1>
      <div class="flex flex-col w-2/3 justify-center gap-10 md:flex-row">
        <Features icon="fa-microphone-lines" text="High Accuracy" />
        <Features icon="fa-clock" text="Fast Processing" />
        <Features icon="fa-globe" text="Multiple Languages" />
      </div>
    </div>
    <Foot/>
  </main>
</template>

<script setup lang="ts">
import Features from '@/components/Features.vue';
import Foot from '@/components/Foot.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToSpeechInput = () => {
  router.push('/speech-input');
};
</script>
