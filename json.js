import * as fs from 'fs/promises'

export async function fileExists (filepath) {
  try {
    await fs.access(filepath)
    return true
  } catch (e) {
    return false
  }
}

export async function readJson (filepath) {
  const data = await fs.readFile(filepath, 'utf-8')
  return JSON.parse(data)
}

export async function writeJson (filepath, data) {
  if (!data) {
    throw new Error(`data argument required but found ${data} when writing to ${filepath}`)
  }

  let str
  try {
    str = JSON.stringify(data, null, 2)
  } catch (err) {
    throw new Error(`JSON.stringify error: \n${err}`)
  }

  try {
    fs.writeFile(filepath, str)
  } catch (err) {
    throw new Error(`Error writing json file: \n${err}`)
  }
}
