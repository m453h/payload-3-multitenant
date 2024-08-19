import image from "@/payload/fields/image";
import slug from "@/payload/fields/slug";
import type { CollectionConfig } from "payload";

const Donors: CollectionConfig = {
  slug: "donors",
  labels: {
    singular: {
      en: "Donor",
    },
    plural: {
      en: "Donors",
    },
  },
  admin: {
    defaultColumns: ["name", "slug", "updatedAt"],
    enableRichTextLink: false,
    group: "Organisation",
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      localized: true,
    },
    slug({ fieldToUse: "name" }),
    image({
      overrides: {
        name: "logo",
        required: true,
        localized: true,
      },
    }),
  ],
};

export default Donors;
