// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      // Meta tags
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Bisheshoggo - Get expert consultation tickets for medical specialists easily online.' },
        { name: 'keywords', content: 'Bisheshoggo, medical consultation, doctor appointment, specialist booking, online healthcare' },
        { name: 'author', content: 'Surajit Singha Sisir, Anirban Singha' }, // Developers
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#ffffff' },

        // Open Graph Meta Tags
        { property: 'og:title', content: 'Bisheshoggo - Get Medical Consultation' },
        { property: 'og:description', content: 'Bisheshoggo - Get expert consultation tickets for medical specialists easily online.' },
        { property: 'og:image', content: 'https://bisheshoggo.com/path-to-image.jpg' },
        { property: 'og:url', content: 'https://bisheshoggo.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@Bisheshoggo' },
        { name: 'twitter:title', content: 'Bisheshoggo - Get Medical Consultation' },
        { name: 'twitter:description', content: 'Bisheshoggo - Get expert consultation tickets for medical specialists easily online.' },
        { name: 'twitter:image', content: 'https://bisheshoggo.com/path-to-image.jpg' },

        // Developer and Team Info
        { name: 'developer', content: 'Surajit Singha Sisir, Anirban Singha' }, // Developer names
        { name: 'developer-team', content: 'Kehem IT' }, // Developer team
        { name: 'dev-platform', content: 'Nuxt JS, Vue, Django, CDN' }, // Technologies used
        { name: 'developer-website', content: 'https://kehem.com' }, // Developer website link
      ],

      // Title of the page
      title: 'বিশেষজ্ঞ.কম',

      // External CSS
      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v1.1.01/mastors.css' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v1.1/mastorsIcons/mastorsIcons.css' },
      ],

      // External JS (with `type="module"` as specified)
      script: [
        { type: 'module', src: 'https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v1.1.01/mastors.js' }
      ],
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 3000
  }

})
