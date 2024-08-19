
import type { CollectionConfig } from "payload";

const Authors: CollectionConfig = {
  slug: "author",
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["fullName", "updatedAt"],
    enableRichTextLink: false,
    group: "Publications",
    useAsTitle: "fullName",
  },
  fields: [
    {
      name: "fullName",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "bio",
      type: "textarea",
      localized: true,
    },
  ],
};

export default Authors;
