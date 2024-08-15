const GuidingPrinciples = {
  slug: "our-guiding-principles",
  imageURL: "/images/cms/blocks/guiding_principles.png",
  imageAltText: "Guiding Principles",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "list",
      label: {
        en: "Guiding Principles",
      },
      type: "relationship",
      relationTo: "guiding-principles",
      hasMany: true,
      admin: {
        isSortable: true,
      },
    },
  ],
};

export default GuidingPrinciples;
