import impacts from "@/payload/fields/impacts";

const OurImpact = {
  slug: "our-impact",
  imageURL: "/images/cms/blocks/codeforafrica/our_impact.jpg",
  imageAltText: "Show our impact.",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    impacts({
      minRows: 1,
    }),
  ],
};

export default OurImpact;
