import slug from '@sindresorhus/slugify'

export function capitalizeWord (word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}

export function capitalCase (phrase) {
  return phrase.split(' ').map((word) => {
    return capitalizeWord(word.trim())
  }).join(' ')
}

export function slugify (str, options = {}) {
  if (!options.separator) {
    options.separator = '_'
  }

  return slug(str, options)
}

export function unslugify (slug, options = {}) {
  const { capitalize = true } = options

  if (capitalize) {
    return capitalCase(slug.replace(/_/g, ' '))
  }

  return slug.replace(/_/g, ' ')
}
