import {CalendarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.max(1200),
    }),
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
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Online', value: 'online'},
          {title: 'Offline', value: 'offline'},
        ],
        layout: 'radio',
      },
      initialValue: 'offline',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      description: 'Physical location for offline events or platform name for online events.',
      validation: (Rule) => Rule.required().max(180),
    }),
    defineField({
      name: 'venueAddress',
      title: 'Venue Address',
      type: 'text',
      rows: 2,
      hidden: ({document}) => document?.eventType === 'online',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endTime',
      title: 'End Time',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required().custom((endTime, context) => {
          const startTime = (context.document as {startTime?: string})?.startTime
          if (!endTime || !startTime) return true
          return endTime >= startTime
            ? true
            : 'End time must be on or after start time'
        }),
    }),
    defineField({
      name: 'timezone',
      title: 'Timezone',
      type: 'string',
      initialValue: 'Asia/Kolkata',
      validation: (Rule) => Rule.required().max(50),
      description: 'Store IANA timezone like Asia/Kolkata for consistent date rendering.',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'registrationDeadline',
      title: 'Registration Deadline',
      type: 'datetime',
      validation: (Rule) =>
        Rule.custom((deadline, context) => {
          const startTime = (context.document as {startTime?: string})?.startTime
          if (!deadline || !startTime) return true
          return deadline <= startTime
            ? true
            : 'Registration deadline should be before or equal to event start time'
        }),
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.required().integer().min(0),
      description: 'Lower number appears first when listing events.',
    }),
    defineField({
      name: 'isPublishedOnSite',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
      validation: (Rule) => Rule.integer().min(1),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alternative text',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      eventType: 'eventType',
      status: 'status',
      startTime: 'startTime',
    },
    prepare(selection) {
      const {title, media, eventType, status, startTime} = selection
      const typeLabel = eventType ? String(eventType).toUpperCase() : 'TYPE'
      const statusLabel = status ? String(status).toUpperCase() : 'STATUS'
      const dateLabel = startTime
        ? new Date(String(startTime)).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : 'No date'

      return {
        title,
        subtitle: `${typeLabel} • ${statusLabel} • ${dateLabel}`,
        media,
      }
    },
  },
})
