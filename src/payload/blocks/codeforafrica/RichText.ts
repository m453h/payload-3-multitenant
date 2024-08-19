import blockFields from "@/payload/fields/blockFields";
import richText from "@/payload/fields/RichText";

const RichText = {
  slug: "richText",
  fields: [
    blockFields({
      name: "richTextBlockFields",
      fields: [
        richText({
          name: "content",
          required: true,
        }),
      ],
    }),
  ],
};

export default RichText;
