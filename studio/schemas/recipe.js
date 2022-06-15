import PreparationTime from "../components/PreparationTime";
import IngredientAmount from "../components/IngredientAmount";

const measurements = [
  { title: "Cups", value: "cups" },
  { title: "Tablespoons", value: "tbs" },
  { title: "Teaspoons", value: "tsp" },
  { title: "Sprinkle", value: "sprinkle" },
];

const time = [
  { title: "Minutes", value: "minutes" },
  { title: "Hours", value: "hours" },
];

export default {
  name: "recipe",
  title: "Recipe",
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
      description: "Write a short pararaph of this recipe (For SEO purposes)",
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
      inputComponent: PreparationTime,
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "value",
          title: "Value",
          type: "number",
        },
        {
          name: "unit",
          title: "Unit",
          type: "string",
          options: {
            list: [...time],
          },
        },
      ],
    },
    {
      name: "ingredientGroup",
      title: "Ingredient Group",
      type: "array",
      of: [
        {
          name: "set",
          title: "Set",
          type: "object",
          fields: [
            {
              name: "heading",
              title: "Heading",
              type: "string",
            },
            {
              name: "ingredient",
              title: "Ingredient",
              type: "array",
              of: [
                {
                  name: "test",
                  title: "Test",
                  type: "object",
                  fields: [
                    {
                      name: "amount",
                      title: "Amount",
                      type: "object",
                      inputComponent: IngredientAmount,
                      fields: [
                        {
                          name: "value",
                          title: "Value",
                          type: "number",
                        },
                        {
                          name: "unit",
                          title: "Unit",
                          type: "string",
                          options: {
                            list: [...measurements],
                          },
                        },
                      ],
                    },
                    {
                      name: "ingredient",
                      title: "Ingredient",
                      type: "reference",
                      to: { type: "ingredient" },
                    },
                    {
                      name: "note",
                      title: "Note",
                      type: "string",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
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
              name: "ingredient",
              title: "Ingredient",
              type: "reference",
              to: { type: "ingredient" },
            },
            {
              name: "ingredientPicker",
              title: "Ingredient Picker",
              type: "string",
              inputComponent: IngredientPicker,
            },
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
