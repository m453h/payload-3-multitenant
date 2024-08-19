import type { CollectionConfig } from "payload";

import { tenant } from "../../fields/tenant";
import { loggedIn } from "./access/loggedIn";
import { tenantAdmins } from "./access/tenantAdmins";
import { tenants } from "./access/tenants";
import formatSlug from "./hooks/formatSlug";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields';


import { PageHeader } from "@/payload/blocks/roboshield/PageHeader";
import { SiteHero } from "@/payload/blocks/roboshield/SiteHero";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Statistics } from "@/payload/blocks/roboshield/Statistics";
import { Content } from "@/payload/blocks/roboshield/Content";
import RobotsTxtGenerator from "@/payload/blocks/roboshield/RobotsTxtGenerator";


export const Pages: CollectionConfig = {
  slug: "cfa_pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    read: tenants,
    create: loggedIn,
    update: tenantAdmins,
    delete: tenantAdmins,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      index: true,
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
    tenant,
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'content',
              type: 'richText',
              // Pass the Lexical editor here and override base settings as necessary
              editor: lexicalEditor({})
            },
            {
              name: "blocks",
              type: "blocks",
              blocks: [PageHeader, SiteHero, Content, Statistics, RobotsTxtGenerator],
              localized: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
  ],
};
