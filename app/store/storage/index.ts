let memory: { [key: string]: string } = {}

export const clearMemory = () => {
  memory = {}
}

export const getString = (key: string): string | null => {
  if (typeof window === 'undefined') {
    return memory[key]
  }
  return window.localStorage.getItem(key)
}

export const setString = (key: string, value: string) => {
  if (typeof window === 'undefined') {
    memory[key] = value
    return
  }
  window.localStorage.setItem(key, value)
}
