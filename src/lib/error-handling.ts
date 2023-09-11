export function error_expect(expect: string) {
  return (err: any) => {
    let msg = "undefined error"
    if (err instanceof Error) msg = err.message
    throw new Error(`${expect}: ${msg}`)
  }
}
