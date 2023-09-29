// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
    srcDir: 'src',
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    },
    devtools: {enabled: true},
    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/i18n',
        '@nuxt/content',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        }
    ],
    i18n: {
        langDir: 'i18n/',
        vueI18n: './i18n.config.ts',
        locales: [
            {
                code: 'en',
                file: 'en.json',
            },
            {
                code: 'es',
                file: 'es.json',
            }
        ],
        defaultLocale: 'es',
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        vue: {
            template:{
                transformAssetUrls
            }
        }
    }
})

