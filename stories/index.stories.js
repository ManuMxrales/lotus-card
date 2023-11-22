import { html } from 'lit';
import '../lotus-card.js';

export default {
  title: 'LotusCard',
  component: 'lotus-card',
  argTypes: {
    cardTitle: { control: 'text', description: 'Card Title' },
    description: { control: 'text', description: 'Card Description' },
    imageUrl: { control: 'text', description: 'Image URL' },
    hasImage: { control: 'Boolean', description: 'Show or hide the Image' },
  },
};

function Template({
  cardTitle = 'Hello world',
  description = 'Lorem Ipsum',
  hasImage,
  imageUrl,
}) {
  return html`
    <lotus-card
      card-title=${cardTitle}
      description=${description}
      ?hasImage=${hasImage}
      imageUrl=${imageUrl}
    >
    </lotus-card>
  `;
}

export const Default = Template.bind({});

export const WithImage = Template.bind({});
WithImage.args = {
  imageUrl:
    'https://res.cloudinary.com/ddfoio9j1/image/upload/v1677799818/DevPortfolio/nasa-yZygONrUBe8-unsplash-2_kgcioe.jpg',
  hasImage: true,
};
