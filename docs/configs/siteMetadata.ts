export type SiteMetadataType = {
  title: string
  headerTitle?: string
  description: string
  siteUrl: string
  author?: {
    name: string
    url: string
  }
  social: {
    npmjs: string
    github: string
  }
  ogImage: string
  favicon?: string
  logo?: string
  language: string
  locale: string
  [key: string]: any
}

export const siteMetadata: SiteMetadataType = {
  title: 'Starter UI',
  description: 'Starter UI Documentations for ReactJS',
  siteUrl: 'https://starter-ui.com',
  author: {
    name: 'Starter UI',
    url: 'https://starter-ui.com',
  },
  social: {
    npmjs: 'https://www.npmjs.com/package/@starter-ui/core',
    github: 'https://github.com/vht2023/starter-ui',
  },
  ogImage: '/assets/images/og-image.png',
  logo: '/assets/images/logo.png',
  favicon: '/assets/images/favicon.png',
  language: 'en',
  locale: 'en_EN',
}
