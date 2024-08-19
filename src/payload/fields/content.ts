import { deepmerge } from "@mui/utils";

import ExternalEmbed from "@/payload/blocks/codeforafrica/ExternalEmbed";
import MediaBlock from "@/payload/blocks/codeforafrica/MediaBlock";
import RichText from "@/payload/blocks/codeforafrica/RichText";

const content = (overrides) =>
  deepmerge(
    {
      name: "content",
      type: "blocks",
      blocks: [RichText, MediaBlock, ExternalEmbed],
    },
    overrides,
  );

export default content;
