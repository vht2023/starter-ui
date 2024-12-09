import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://starter-ui.com',
      lastModified: new Date(),
    },
  ]
}
