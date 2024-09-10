import { deepmerge } from '@mui/utils'

import { Field } from 'payload'

type LinkType = (options?: {
  disableLabel?: boolean
  defaultValue?: string
  disableLinkTypeSelection?: boolean
  disableOpenInNewTab?: boolean
  overrides?: Record<string, unknown>
}) => Field

const link: LinkType = ({
  disableLabel = false,
  defaultValue = 'internal',
  disableLinkTypeSelection = false,
  disableOpenInNewTab = false,
  overrides = {},
} = {}) => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
              hidden: disableLinkTypeSelection,
            },
            defaultValue,
            options: [
              {
                label: 'Internal link',
                value: 'internal',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'internal',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'internal',
      },
      label: 'Document to link to',
      maxDepth: 1,
      relationTo: ['RoboshieldPages', 'CodeForAfricaPages'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: true,
    },
  ]

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
          label: 'Label',
          required: true,
        },
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

  if (!disableOpenInNewTab) {
    linkResult.fields.push({
      type: 'row',
      fields: [
        {
          name: 'newTab',
          label: {
            en: 'Open in new tab',
            fr: 'Ouvrir dans un nouvel onglet',
            pt: 'Abrir num novo separador',
          },
          type: 'checkbox',
        },
      ],
    })
  }

  return deepmerge(linkResult, overrides)
}

export default link
