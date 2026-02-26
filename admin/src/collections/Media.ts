import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true, // Allows anyone to view images
  },
  fields: [
    {
      name: 'alt',
      type: 'text', // This was missing and caused the UI crash
      required: true,
    },
  ],
  upload: {
    staticDir: 'media', // Folder where files will be saved locally
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'], // Only allow images
  },
}
