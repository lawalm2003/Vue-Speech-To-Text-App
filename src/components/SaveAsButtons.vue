<template>
  <div class="w-full max-w-5xl mx-auto px- py-6">
    <div class="bg-white rounded-lg shadow-md">
      <!-- Toolbar -->
      <div
        class="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 p-2"
      >
        <!-- Restart -->
        <button
          @click="emit('restart')"
          class="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition text-sm"
        >
          <i class="fa-solid fa-rotate-left"></i>
          Restart
        </button>

        <!-- Copy Button -->
        <div class="relative">
          <span
            v-if="props.isCopied"
            class="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md shadow-sm z-10 animation"
          >
            Copied!
          </span>

          <button
            @click="emit('copyText')"
            class="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm"
          >
            <i class="fa-regular fa-copy"></i>
            Copy
          </button>
        </div>

        <!-- Actions Dropdown -->
        <div class="relative">
          <button
            @click="toggleActions"
            class="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition text-sm"
          >
            Actions
            <i
              :class="[
                'fa-solid  fa-chevron-down animation',
                showActions && ' -rotate-180',
              ]"
            ></i>
          </button>

          <!-- Dropdown -->

          <div
            v-if="showActions"
            class="absolute right-0 mt-2 w-44 bg-white border rounded-md shadow-lg z-20 animation"
          >
            <ul class="py-2 text-sm text-gray-700">
              <li>
                <button
                  @click="emit('saveTxt')"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Save as TXT
                </button>
              </li>
              <li>
                <button
                  @click="emit('savePdf')"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Save as PDF
                </button>
              </li>
              <li>
                <button
                  @click="emit('saveDocx')"
                  class="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Save as DOCX
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits();
const props = defineProps<{ isCopied: boolean }>();
const showActions = ref(false);

const toggleActions = () => {
  showActions.value = !showActions.value;
};

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
