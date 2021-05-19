import * as fs from 'fs/promises'

export async function fileExists (filepath) {
  try {
    await fs.access(filepath)
    return true
  } catch (e) {
    return false
  }
}
