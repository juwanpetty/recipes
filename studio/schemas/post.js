const countries = [
  { title: "Afghanistan", value: "AF" },
  { title: "Åland Islands", value: "AX" },
  { title: "Albania", value: "AL" },
  { title: "Algeria", value: "DZ" },
];

export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "excerpt",
      description: "Write a short pararaph of this post (For SEO purposes)",
      title: "Excerpt",
      rows: 5,
      type: "text",
      validation: (Rule) =>
        Rule.max(160).error(
          "SEO descriptions are usually better when its below 160"
        ),
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "preparationTime",
      title: "Preparation time",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "time",
          title: "Time",
          type: "number",
        },
        {
          name: "measurement",
          title: "Measurement",
          type: "string",
          options: {
            list: [...countries],
          },
        },
      ],
    },
    {
      name: "servings",
      title: "Servings",
      type: "number",
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "number",
    },
    {
      name: "steps",
      title: "Steps",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "notes",
      title: "Notes",
      type: "array",
      of: [
        {
          name: "note",
          title: "Note",
          type: "object",
          fields: [
            {
              name: "content",
              title: "Content",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
