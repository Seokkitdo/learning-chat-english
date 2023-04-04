import { auth } from '$auth/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

import { writable } from 'svelte/store'

const user = writable<any>()

export default {
  ...user,
  signIn: async () => {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  },
  signOut: async () => {
    await signOut(auth)
  }
}
