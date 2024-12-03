import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://starterui.vercel.app',
      lastModified: new Date(),
    },
  ]
}
