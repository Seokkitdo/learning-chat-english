import { writable } from 'svelte/store'

const questions = writable<string[]>([])

export default {
  ...questions
}
