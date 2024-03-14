import { html } from 'lit';
import '../lotus-card.js';

export default {
  title: 'LotusCard',
  component: 'lotus-card',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'circle'],
      },
      description: 'Card Variant',
    },
    cardTitle: { control: 'text', description: 'Card Title' },
    description: { control: 'text', description: 'Card Description' },
    imageUrl: { control: 'text', description: 'Image URL' },
    hasImage: { control: 'Boolean', description: 'Show or hide the Image' },
    isClickable: { control: 'Boolean', description: 'Make the card clickable' },
  },
};

function Template({
  variant = 'default',
  cardTitle = 'Hello world',
  description = 'Lorem Ipsum',
  hasImage,
  imageUrl,
  isClickable,
}) {
  return html`
    <lotus-card
      variant=${variant}
      card-title=${cardTitle}
      description=${description}
      image-url=${imageUrl}
      ?hasImage=${hasImage}
      ?is-clickable=${isClickable}
    >
    </lotus-card>
  `;
}

export const Default = Template.bind({});
Default.args = {
  cardTitle: 'Title',
  description: 'Description',
  isClickable: false,
};

export const WithImage = Template.bind({});
WithImage.args = {
  cardTitle: 'The Earth',
  imageUrl:
    'https://res.cloudinary.com/ddfoio9j1/image/upload/v1677799818/DevPortfolio/nasa-yZygONrUBe8-unsplash-2_kgcioe.jpg',
  hasImage: true,
  isClickable: true,
};

export const VariantCircle = Template.bind({});
VariantCircle.args = {
  variant: 'circle',
  cardTitle: 'Title',
  description: 'Description',
  imageUrl:
    'https://res.cloudinary.com/ddfoio9j1/image/upload/v1664747584/cld-sample-5.jpg',
  hasImage: true,
  isClickable: true,
};
