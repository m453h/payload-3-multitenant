import linkGroup from "@/payload/fields/links/linkGroup";

const JoinOurSlack = {
  slug: "join-our-slack",
  imageURL: "/images/cms/blocks/codeforafrica/join_our_slack.jpg",
  imageAltText: "Display link to join our Slack community",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
    },
    linkGroup({ overrides: { name: "action", label: "Action" } }),
  ],
};

export default JoinOurSlack;
