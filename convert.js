import { toNumber } from 'lodash'

/**
 * Convert an object's properties from strings to numbers where appropriate
 * @param {Object} [options]
 * @param {boolean} [options.convertLeadingZeroStrings=true]
 * @returns {Object}
 */
export function convertNumberProperties (row, options = {}) {
  const { convertLeadingZeroStrings = true } = options

  const updatedRow = {}
  for (const key in row) {
    const value = row[key]

    if (convertLeadingZeroStrings && value[0] === '0') {
      updatedRow[key] = value
    } else {
      const parsed = toNumber(value)

      if (isNaN(parsed)) {
        updatedRow[key] = value
      } else {
        updatedRow[key] = parsed
      }
    }
  }

  return updatedRow
}
