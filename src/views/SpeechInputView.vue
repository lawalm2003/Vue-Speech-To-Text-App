<template>
  <section class="h-screen flex justify-center items-center">
    <div
      class="bg-[#e7e7e7] w-full max-w-176 px-3 py-5 flex flex-col items-center rounded-lg shadow-xl"
    >
      <h2 class="text-3xl font-semibold">Speak Now</h2>
      <div class="w-full h-46 rounded-lg mt-7 bg-white p-3 overflow-auto">
        <p class="whitespace-normal break-words" v-text="transcript"></p>
      </div>
      <div v-if="!toSave" class="mt-7 w-full flex flex-col gap-3">
        <button
          v-if="transcript !== ''"
          @click="onRestart"
          class="bg-black text-white text-lg py-2 rounded-lg w-full cursor-pointer"
        >
          Restart
        </button>
        <button
          @click="handleStartAndStop"
          class="bg-black text-white text-lg py-2 rounded-lg w-full cursor-pointer"
        >
          {{ text }}
        </button>
      </div>
      <div v-else class="mt-7 w-full flex flex-col gap-3">
        <SaveAsButtons
          :isCopied="isCopied"
          @restart="onRestart"
          @copyText="copyText"
          @savePdf="saveAsPdf"
          @saveTxt="saveAsTxt"
          @saveDocx="saveAsDocx"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { ButtonText } from '@/types/ButtonText';
import SaveAsButtons from '@/components/SaveAsButtons.vue';
import { Packer, Document, Paragraph } from 'docx';
import jsPDF from 'jspdf';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition ;

const isRecording = ref<boolean>(false);
const transcript = ref<string>('dfcxg');
const toSave = ref<boolean>(false);
const hasSaved = ref<boolean>(false);

const recognition = new SpeechRecognition();

onMounted(() => {
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onstart = () => {
    console.log('recognition started');
    isRecording.value = true;
  };

  recognition.onend = () => {
    console.log('recognition ended');
    isRecording.value = false;
  };

  recognition.onresult = (evt: any) => {
    const result = evt.results[evt.resultIndex];
    if (result && result[0]) {
      transcript.value = result[0].transcript; // Update transcript with recognized speech
    }

    checkForCommand(result);
  };
});

const checkForCommand = (result: SpeechRecognitionResult) => {
  const command = result[0].transcript.toLowerCase();
  if (command.includes('stop recording')) {
    recognition.stop();
  }
  if (command.includes('clear all text')) {
    transcript.value = '';
    hasSaved.value = false;
  }
  if (command.includes('save as pdf') && !hasSaved.value) {
    const cleanedText = command.replace('save as pdf', '').trim();
    transcript.value = cleanedText;
    saveAsPdf();
    hasSaved.value = true;
  }
};

const onRestart = () => {
  isRecording.value = false;
  transcript.value = '';
  toSave.value = false;
  hasSaved.value = false;
  recognition.start();
};

const text = computed<ButtonText>(() => {
  if (transcript.value !== '') {
    return 'Stop and Proceed';
  } else if (isRecording.value) {
    return 'Listening...';
  } else {
    return 'Start';
  }
});

const handleStartAndStop = () => {
  if (text.value === 'Stop and Proceed') {
    toSave.value = true;
  } else {
    if (isRecording.value) {
      recognition.stop();
    } else {
      recognition.start();
    }
  }
};

const isCopied = ref(false);

const copyText = () => {
  try {
    navigator.clipboard.writeText(transcript.value);
    isCopied.value = true;
    setTimeout(() => {
      isCopied.value = false;
    }, 1200);
  } catch (error) {
    console.error('Failed to copy:', error);
  }
};

const saveAsPdf = () => {
  const pdf = new jsPDF();
  pdf.text(transcript.value.split('\n'), 10, 10, { maxWidth: 190 });
  pdf.save('speechtext.pdf');
};

const saveAsTxt = () => {
  const blob = new Blob([transcript.value], {
    type: 'text/plain;charset=utf-8',
  });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'Speechtext.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const saveAsDocx = async () => {
  const doc = new Document({
    sections: [
      {
        children: [new Paragraph(transcript.value)],
      },
    ],
  });
  const blob = await Packer.toBlob(doc);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Speechtext.docx';
  a.click();
};
</script>

<style scoped></style>
