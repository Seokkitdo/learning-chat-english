import { writable } from 'svelte/store'

const questions = writable<string[]>([])

export default {
  ...questions,
  updateQuestion: (question: string) => {
    questions.update(($question) => {
      return [...$question, question]
    })
  }
}
