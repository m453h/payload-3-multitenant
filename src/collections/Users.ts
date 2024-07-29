import { superAdminFieldAccess } from '@/access/superAdmins'
import type { CollectionConfig } from 'payload'
import { tenantAdmins } from './Tenants/access/tenantAdmins'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: "firstName",
      type: "text",
    },
    {
      name: "lastName",
      type: "text",
    },
    {
      name: "roles",
      type: "select",
      hasMany: true,
      required: true,
      access: {
        create: superAdminFieldAccess,
        update: superAdminFieldAccess,
        read: superAdminFieldAccess,
      },
      options: [
        {
          label: "Super Admin",
          value: "super-admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
    {
      name: "tenants",
      type: "array",
      label: "Tenants",
      fields: [
        {
          name: "tenant",
          type: "relationship",
          relationTo: "tenants",
          required: true,
        },
        {
          name: "roles",
          type: "select",
          hasMany: true,
          required: true,
          options: [
            {
              label: "Admin",
              value: "admin",
            },
            {
              label: "User",
              value: "user",
            },
          ],
        },
      ],
    },
  ],
}
