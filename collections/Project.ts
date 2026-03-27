import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'project',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'media',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
  orderable: true,
}
