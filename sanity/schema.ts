import { defineType, defineField } from 'sanity';

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'order', type: 'number', title: 'Order' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({
      name: 'icon',
      type: 'text',
      title: 'Icon (inline SVG)',
      description: 'Paste an inline SVG (stroke icons recommended).'
    })
  ]
});

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'order', type: 'number', title: 'Order' }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'tag', type: 'string', title: 'Tag' }),
    defineField({ name: 'summary', type: 'text', title: 'Summary' }),
    defineField({ name: 'alt', type: 'string', title: 'Image Alt Text' }),
    defineField({
      name: 'imagePath',
      type: 'string',
      title: 'Image Path (public/ path)',
      description: 'Example: /assets/image2.jpg'
    })
  ]
});
