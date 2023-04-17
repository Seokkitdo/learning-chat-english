import { writable } from 'svelte/store'
import { isFail, type Fail } from './fail'

class FetchApi<Input, Output> {
  data = writable<Output>()
  isLoading = writable<boolean>(false)
  error = writable<Fail>()

  async postByFormdata(url: string, body, accessToken) {
    this.isLoading.set(true)

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'access-key': 'bd54a326-cec5-43a8-b963-e3fb197578c7',
          'Access-Control-Allow-Origin': '*'
        },
        body: body
      })

      const result = await res.json()
      isFail(result) ? this.error.set(result) : this.data.set(result)
    } catch (e) {
      const error: Fail = {
        kind: 'fail',
        message: e.message
      }
      this.error.set(error)
    }

    this.isLoading.set(false)
    return { data: this.data, isLoading: this.isLoading, error: this.error }
  }

  async post(url: string, body: Input, accessToken?: string) {
    this.isLoading.set(true)

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'access-key': 'bd54a326-cec5-43a8-b963-e3fb197578c7',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)
      })

      const result = await res.json()
      isFail(result) ? this.error.set(result) : this.data.set(result)
    } catch (e) {
      const error: Fail = {
        kind: 'fail',
        message: e.message
      }
      this.error.set(error)
    }

    this.isLoading.set(false)
    return { data: this.data, isLoading: this.isLoading, error: this.error }
  }

  async get(url: string, accessToken: string) {
    this.isLoading.set(true)

    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'access-key': 'bd54a326-cec5-43a8-b963-e3fb197578c7'
        }
      })
      const result = await res.json()
      isFail(result) ? this.error.set(result) : this.data.set(result)
    } catch (e) {
      const error: Fail = {
        kind: 'fail',
        message: e.message
      }
      this.error.set(error)
    }

    this.isLoading.set(false)

    return { data: this.data, isLoading: this.isLoading, error: this.error }
  }

  async delete(url: string, accessToken: string) {
    this.isLoading.set(true)

    try {
      const res = await fetch(url, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'access-key': 'bd54a326-cec5-43a8-b963-e3fb197578c7'
        }
      })
      const result = await res.json()
      console.log('result', result)

      isFail(result) ? this.error.set(result) : this.data.set(result)
    } catch (e) {
      const error: Fail = {
        kind: 'fail',
        message: e.message
      }
      this.error.set(error)
    }
    this.isLoading.set(false)

    return { data: this.data, isLoading: this.isLoading, error: this.error }
  }
  async patch(url: string, body: any, accessToken: string) {
    this.isLoading.set(true)

    try {
      const res = await fetch(url, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'access-key': 'bd54a326-cec5-43a8-b963-e3fb197578c7',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)
      })
      const result = await res.json()
      console.log('result', result)

      isFail(result) ? this.error.set(result) : this.data.set(result)
    } catch (e) {
      const error: Fail = {
        kind: 'fail',
        message: e.message
      }
      this.error.set(error)
    }
    this.isLoading.set(false)

    return { data: this.data, isLoading: this.isLoading, error: this.error }
  }

  fetch(type: string, url: string, body?: Input, accessToken?: string) {
    switch (type) {
      case 'post':
        this.post(url, body, accessToken)
        break
      default:
        this.get(url, accessToken)
        break
    }

    return { data: this.data, isLoading: this.isLoading, error: this.error }
  }
}

export default FetchApi
