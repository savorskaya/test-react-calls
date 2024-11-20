export function stringToNumber(str: string) {
  return `+${str[0]} (${str.slice(1, 4)}) ${str.slice(4, 7)}-${str.slice(7, 9)}-${str.slice(9, 11)}`
}
