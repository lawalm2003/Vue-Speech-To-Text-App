<template>
    <div class="flex flex-col justify-center items-center shadow-2xl bg-white p-3 rounded-lg">
        <i :class="['fa-solid', props.icon, 'text-lg mb-4']"></i>
        <span class="text-sm">{{ props.text }}</span>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    icon: string,
    text: string
}>()
</script>

<style scoped>

</style>