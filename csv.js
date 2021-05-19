import { createWriteStream } from 'fs'
import { parseFile } from '@fast-csv/parse'
import { format, writeToPath } from '@fast-csv/format'
import pump from 'pump'

export async function writeCsv (filepath, rows) {
  return new Promise((resolve, reject) => {
    const stream = writeToPath(filepath, rows)

    stream.on('error', (error) => {
      reject(error)
    })

    stream.on('finish', () => {
      resolve()
    })
  })
}

export function createCsvWriteStream (filepath, options) {
  const writeStream = createWriteStream(filepath)
  const formatStream = format(options)
  return pump(formatStream, writeStream)
}

export async function readCsv (filepath) {
  const rows = []

  return new Promise((resolve, reject) => {
    const stream = parseFile(filepath)

    stream.on('error', (error) => {
      reject(error)
    })

    stream.on('data', (row) => {
      rows.push(row)
    })

    stream.on('end', () => {
      resolve(rows)
    })
  })
}

export function createCsvReadStream (filepath) {
  return parseFile(filepath)
}
