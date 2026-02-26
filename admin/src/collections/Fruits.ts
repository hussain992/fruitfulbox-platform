import type { CollectionConfig } from 'payload'

export const Fruits: CollectionConfig = {
  slug: 'fruits',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'price', 'isAvailable'],
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'category',
      type: 'text',
    },
    {
      name: 'variant',
      type: 'text',
    },
    {
      name: 'price',
      type: 'group',
      fields: [
        {
          name: 'original',
          type: 'text', // Using text because of "₹" and "/350g"
        },
        {
          name: 'discounted',
          type: 'text',
        },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'benefits',
      type: 'json',
    },
    {
      name: 'usage',
      type: 'json',
    },
    {
      name: 'origin',
      type: 'text',
    },
    {
      name: 'season',
      type: 'text',
    },
    {
      name: 'quality',
      type: 'text',
    },
    {
      name: 'storage',
      type: 'text',
    },
    {
      name: 'packaging',
      type: 'text',
    },
    {
      name: 'isAvailable',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'stock',
      type: 'number',
    },
    {
      name: 'image',
      type: 'text', // Replace with type: 'upload', relationTo: 'media' later
    },
    {
      name: 'tags',
      type: 'json'
    },
    {
      name: 'reviews',
      type: 'array',
      fields: [
        {
          name: 'user',
          type: 'text',
        },
        {
          name: 'rating',
          type: 'number',
          min: 1,
          max: 5,
        },
        {
          name: 'comment',
          type: 'textarea',
        },
        {
          name: 'date',
          type: 'date',
        },
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
      ],
    },
  ],

}