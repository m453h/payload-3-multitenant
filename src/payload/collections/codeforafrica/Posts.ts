import authors from "@/payload/fields/authors";
import content from "@/payload/fields/content";
import image from "@/payload/fields/image";
import publishedOn from "@/payload/fields/publishedOn";
import slug from "@/payload/fields/slug";
import tags from "@/payload/fields/tags";
import type { CollectionConfig } from "payload";

const Posts: CollectionConfig = {
  slug: "posts",
  labels: {
    singular: {
      en: "Post",
    },
    plural: {
      en: "Posts",
    },
  },
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ["title", "authors", "publishedOn"],
    description: "Stories and Opportunities",
    group: "Publication",
    useAsTitle: "title",
    listSearchableFields: ["content", "excerpt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    image({
      overrides: {
        name: "coverImage",
        required: true,
        localized: true,
      },
    }),
    content({ minRows: 1, required: true, localized: true }),
    slug(),
    publishedOn({ localized: true }),
    tags({
      admin: {
        isSortable: true,
        position: "sidebar",
      },
    }),
    authors({ localized: true }),
    {
      name: "excerpt",
      type: "textarea",
      required: true,
      localized: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
  versions: {
    drafts: true,
  },
};

export default Posts;
