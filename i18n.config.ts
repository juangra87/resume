
import en from '~/i18n/en.json'
import es from '~/i18n/es.json'
export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: { en, es },
}))
