import toNumber from 'lodash/toNumber.js'

/**
 * Convert an object's properties from strings to numbers where appropriate
 * @param {Object} [options]
 * @param {boolean} [options.convertLeadingZeroStrings=true]
 * @returns {Object}
 */
export function convertNumberProperties (obj, options = {}) {
  const { convertLeadingZeroStrings = true } = options

  const updatedObj = {}
  for (const key in obj) {
    const value = obj[key]

    if (convertLeadingZeroStrings && value[0] === '0' && value.length > 1) {
      updatedObj[key] = value
    } else {
      const parsed = toNumber(value)

      if (isNaN(parsed)) {
        updatedObj[key] = value
      } else {
        updatedObj[key] = parsed
      }
    }
  }

  return updatedObj
}

/**
 * Convert an object's properties from empty strings to `null`
 * @param {Object} obj
 * @returns {Object}
 */
export function convertEmptyStringsToNull (obj) {
  const updatedObj = {}
  for (const key in obj) {
    const value = obj[key]

    if (value && typeof value === 'string' && !value.length) {
      updatedObj[key] = null
    } else {
      updatedObj[key] = value
    }
  }

  return updatedObj
}
