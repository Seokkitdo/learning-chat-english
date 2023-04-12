import { writable } from 'svelte/store'

const answers = writable<any>()

export default {
  ...answers
}
