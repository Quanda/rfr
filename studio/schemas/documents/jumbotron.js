import { colorInputList } from '../../constants';

export default {
  name: 'jumbotron',
  title: 'Jumbotron',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'blockText'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'blockText'
    },
    {
      name: 'ctaButton',
      title: 'Primary Button',
      type: 'button',
      description: 'The Call to Action (CTA) button'
    },
    {
      name: 'backgroundColor',
      title: 'Background color',
      type: 'colors',
      description: 'Background color for the Jumbotron. This will have no effect if you have selected a background image.',
      options: {
        list: colorInputList
      }
    },
    {
      name: 'backgroundImage',
      title: 'Background image',
      type: 'figure'
    },
    {
      name: 'backgroundOpacity',
      title: 'Background image opacity',
      type: 'number',
      description: 'The opacity of the background image (between 0-1). 1.0 produces 100% opacity (no transparency)',
      validation: Rule => Rule.min(0.1).max(1.0).required(),
      options: {
        list: [1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]
      }
    }
  ],
  initialValue: {
    backgroundOpacity: 1.0
  }
};
