import { createWriteStream } from 'fs'
import { parseFile } from '@fast-csv/parse'
import { format, writeToPath } from '@fast-csv/format'
import pump from 'pump'

export async function writeCsv (filepath, rows, options = {}) {
  return new Promise((resolve, reject) => {
    const stream = writeToPath(filepath, rows, options)

    stream.on('error', (error) => {
      reject(error)
    })

    stream.on('finish', () => {
      resolve()
    })
  })
}

export function createCsvWriteStream (filepath, options = {}) {
  const writeStream = createWriteStream(filepath)
  const formatStream = format(options)
  return pump(formatStream, writeStream)
}

export async function readCsv (filepath, options = {}) {
  const rows = []

  return new Promise((resolve, reject) => {
    const stream = parseFile(filepath, options)

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

export function createCsvReadStream (filepath, options = {}) {
  return parseFile(filepath, options)
}
