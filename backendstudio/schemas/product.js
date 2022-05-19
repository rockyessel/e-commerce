export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Please provide the right field value',
      validation: (Rule) => Rule.required().warning('This is required please.'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
      description: 'Please provide the right field value',
      validation: (Rule) => Rule.required().warning('This is required please.'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Please provide the right field value',
      validation: (Rule) => Rule.required().warning('This is required please.'),
    },
    {
      name: 'new_price',
      title: 'New Price',
      type: 'number',
      description: 'Please provide the right field value',
      validation: (Rule) => Rule.required().warning('This is required please.'),
    },
    {
      name: 'old_price',
      title: 'Old Price',
      type: 'number',
      description: 'Please provide the right field value',
      validation: (Rule) => Rule.required().warning('This is required please.'),
    },
    {
      name: 'featured_product',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Please provide the right field value',
      validation: (Rule) => Rule.required().warning('This is required please.'),
    },
    {
      name: 'recommended_product',
      title: 'Recommended Product',
      type: 'boolean',
      description: 'Please provide the right field value',
      validation: (Rule) => Rule.required().warning('This is required please.'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) =>
        Rule.required().warning('Please choose only one category.'),
    },
  ],
};
