export const fallbackLng = 'en'
export const languages = ['vi', fallbackLng, 'ja']
export const defaultNS = 'translation-server'
export const cookieName = 'i18next'

interface Option {
  supportedLngs: string[]
  fallbackLng: string
  lng: string
  fallbackNS: string
  defaultNS: string
  ns: string | string[]
}

export function getOptions (lng = fallbackLng, ns: string | string[] = defaultNS): Option {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
