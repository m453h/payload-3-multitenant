import image from "@/payload/fields/image";
import richText from "@/payload/fields/RichText";
import slug from "@/payload/fields/slug";
import type { CollectionConfig } from "payload";

const GuidingPrinciples: CollectionConfig = {
  slug: "guiding-principles",
  admin: {
    defaultColumns: ["title", "slug", "updatedAt"],
    enableRichTextLink: false,
    group: "Organisation",
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    slug({ fieldToUse: "title" }),
    image({
      overrides: {
        name: "icon",
        required: true,
        localized: true,
      },
    }),
    richText({
      name: "description",
      required: true,
      localized: true,
    }),
  ],
};

export default GuidingPrinciples;
