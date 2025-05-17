import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'SubService',
  title: 'SubService',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceType',
      title: 'ServiceType',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body1',
      title: 'Body1',
      type: 'blockContent',
    }),

    defineField({
      name: 'body2',
      title: 'Body2',
      type: 'blockContent',
    }),
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),

    defineField({
      name: 'youtubeVideoUrl',
      title: 'YouTube Video URL',
      type: 'url',
    }),
  ],
})
