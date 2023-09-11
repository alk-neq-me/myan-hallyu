import { Buffer } from 'buffer'

export function decode64(encoded: string): string {
  return Buffer.from(encoded, "base64").toString("utf-8")
}
