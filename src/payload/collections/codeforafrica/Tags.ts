import slug from "@/payload/fields/slug";
import type { CollectionConfig } from "payload";

const Tags: CollectionConfig = {
  slug: "tag",
  admin: {
    defaultColumns: ["name", "updatedAt"],
    enableRichTextLink: false,
    group: "Publications",
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      unique: true,
      required: true,
      localized: true,
    },
    slug({ fieldToUse: "name" }),
  ],
};

export default Tags;
