import type { CollectionConfig } from "payload";

import { anyone } from "@/access/anyone";

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: anyone,
    read: anyone,
    update: anyone,
    delete: anyone,
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
