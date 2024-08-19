import slug from "@/payload/fields/slug";
import type { CollectionConfig } from "payload";

const Teams: CollectionConfig = {
  slug: "teams",
  admin: {
    defaultColumns: ["name", "updatedAt"],
    enableRichTextLink: false,
    group: "Organisation",
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
      localized: true,
      required: true,
    },
  slug({ fieldToUse: "name" }),
  ],
};

export default Teams;
