<template>
  <div class="h-screen flex items-center">{{ transcriptStore.text }}</div>
</template>

<script setup lang="ts">
import useTranscriptStore from '@/stores/transcriptStore';

const transcriptStore = useTranscriptStore();
</script>
