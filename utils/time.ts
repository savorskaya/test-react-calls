export function secondsToMinutes(d: number) {
  d = Number(d)
  const m = Math.floor((d % 3600) / 60)
  const s = Math.floor((d % 3600) % 60)
  return `${m}:${s}`
}
