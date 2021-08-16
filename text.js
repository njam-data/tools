import slug from '@sindresorhus/slugify'

export function capitalizeWord (word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}

export function capitalCase (phrase) {
  return phrase.split(' ').map((word) => {
    return capitalizeWord(word.trim())
  }).join(' ')
}

export function slugify (str, options) {
  return slug(str, options)
}
