
import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'LeSeft Website Content',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'LeSeft Nigeria',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Homepage Main Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroDescription',
      title: 'Homepage Introduction',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroImage',
      title: 'Homepage Banner Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Us Heading',
      type: 'string',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Us Description',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'commodities',
      title: 'Commodities',
      type: 'array',
      of: [
        defineField({
          name: 'commodity',
          title: 'Commodity',
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
            {name: 'image', title: 'Image', type: 'image'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'equipment',
      title: 'Equipment & Technologies',
      type: 'array',
      of: [
        defineField({
          name: 'equipmentItem',
          title: 'Equipment Item',
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
            {name: 'image', title: 'Image', type: 'image'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'projects',
      title: 'Projects & Services',
      type: 'array',
      of: [
        defineField({
          name: 'project',
          title: 'Project',
          type: 'object',
          fields: [
            {name: 'title', title: 'Project Title', type: 'string'},
            {name: 'description', title: 'Description', type: 'text'},
            {name: 'image', title: 'Project Image', type: 'image'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'partnerTitle',
      title: 'For Partners Heading',
      type: 'string',
    }),
    defineField({
      name: 'partnerDescription',
      title: 'For Partners Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'LeSeft Website Content',
        subtitle: 'Manage the main corporate website content',
      }
    },
  },
})
