import fetch from 'isomorphic-unfetch'

export { default as fetch } from 'isomorphic-unfetch'

/**
 * fetch json
 * using fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * @param {string} url
 * @param {object} [options] - see all fetch options: https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @param {string} [options.method]
 * @param {string} [options.headers]
 * @param {string} [options.body]
 * @param {string} [options.mode]
 */
export async function fetchJson (url, options) {
  const response = await fetch(url, options)
  return response.json()
}

/**
 * fetch text
 * using fetch: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * @param {string} url
 * @param {object} [options] - see all fetch options: https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @param {string} [options.method]
 * @param {string} [options.headers]
 * @param {string} [options.body]
 * @param {string} [options.mode]
 */
export async function fetchText (url, options) {
  const response = await fetch(url, options)
  return response.text()
}
