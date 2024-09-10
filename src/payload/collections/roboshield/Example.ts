import { CollectionConfig } from 'payload'

export const ExampleCollection: CollectionConfig = {
  slug: 'example-collection',
  admin: {
    useAsTitle: 'label',
    group: 'Publications',
  },
  fields: [
    {
      type: 'row', // required
      fields: [
        // required
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
