import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { LexicalRichTextAdapterProvider } from "node_modules/@payloadcms/richtext-lexical/dist/types";

interface RichTextInput {
  name: string;
  required?: boolean;
  label?: string;
  defaultValue?: any;
  localized?: boolean;
}

interface RichTextOutput {
  name: string;
  type: 'richText';
  required: boolean;
  label: string;
  editor: LexicalRichTextAdapterProvider;
}

export default function richText(input: RichTextInput): RichTextOutput {
  return {
    name: input.name,
    type: 'richText',
    required: input.required ?? false,
    label: input.label ?? 'Content',
    editor: lexicalEditor({}),
  };
}
