import {ImagesIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery Item',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (Rule) => Rule.max(140),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(120),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(500),
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().integer().min(0),
      description: 'Lower number appears first.',
    }),
    defineField({
      name: 'isPublishedOnSite',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      sortOrder: 'sortOrder',
    },
    prepare(selection) {
      const {title, media, sortOrder} = selection
      const resolvedTitle = title || 'Untitled image'

      return {
        title: resolvedTitle,
        media,
        subtitle: `Sort: ${typeof sortOrder === 'number' ? sortOrder : 0}`,
      }
    },
  },
})
