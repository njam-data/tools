import { createWriteStream } from 'fs'
import { pipeline } from 'stream'

import { parseFile, parseString } from '@fast-csv/parse'
import { format, writeToPath } from '@fast-csv/format'

const defaultOptions = {
  headers: true
}

export async function parseCsvString (csvString, options = defaultOptions) {
  const rows = []

  return new Promise((resolve, reject) => {
    parseString(csvString, options)
      .on('error', (error) => {
        reject(error)
      })
      .on('data', (row) => {
        rows.push(row)
      })
      .on('end', () => {
        resolve(rows)
      })
  })
}

export async function writeCsv (filepath, rows, options = defaultOptions) {
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

function defaultCallback (err) {
  if (err) {
    throw err
  }
}

export function createCsvWriteStream (filepath, options = defaultOptions, callback = defaultCallback) {
  const writeStream = createWriteStream(filepath)
  const formatStream = format(options)
  return pipeline(formatStream, writeStream, callback)
}

export async function readCsv (filepath, options = defaultOptions) {
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

export function createCsvReadStream (filepath, options = defaultOptions) {
  return parseFile(filepath, options)
}
