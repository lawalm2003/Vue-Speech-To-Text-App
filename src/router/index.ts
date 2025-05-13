import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SpeechInputView from '@/views/SpeechInputView.vue'
import TextOutputView from '@/views/TextOutputView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/speech-input',
      name: 'SpeechInput',
      component: SpeechInputView
    },
    {
      path: '/text-output',
      name: 'TextOutput',
      component: TextOutputView
    }
  ],
})

export default router
