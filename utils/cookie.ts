export function setCookieWindow(name: string, val: string) {
  if (typeof window === 'undefined') return
  const date = new Date()
  const value = val

  // Set it expire in 7 days
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000)

  // Set it
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`
}

export function getCookieWindow(name: string) {
  if (typeof window === 'undefined') return

  const dc = document.cookie
  const prefix = `${name}=`
  let begin = dc.indexOf(`; ${prefix}`)
  if (begin === -1) {
    begin = dc.indexOf(prefix)
    if (begin !== 0) return null
  } else {
    begin += 2
  }
  let end = document.cookie.indexOf(';', begin)
  if (end === -1) {
    end = dc.length
  }
  return unescape(dc.substring(begin + prefix.length, end))
}
