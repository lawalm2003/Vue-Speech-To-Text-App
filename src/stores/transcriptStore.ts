import { defineStore } from "pinia";


const useTranscriptStore = defineStore('transcriptStore', {
    state: () => {
        return{
            text: '' as string
        }
    }
})
export default useTranscriptStore