import { writable } from 'svelte/store'

const rooms = writable<any[]>()

export default {
  ...rooms
}
