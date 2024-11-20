export function throttle(callee: () => void, timeout: number) {
  let timer: any = null

  return function perform() {
    if (timer) return

    timer = setTimeout(() => {
      callee()

      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}
