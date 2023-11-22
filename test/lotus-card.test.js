import { html } from 'lit';
import { fixture, expect, assert } from '@open-wc/testing';
import '../lotus-card.js';

let el;
const cleanComponent = async () => {
  el = await fixture(html`<lotus-card></lotus-card>`);
  await el.updateComplete;
};

describe('LotusCard', () => {
  describe('Default Value', () => {
    cleanComponent();
    it('Props Values', () => {
      expect(el.cardTitle).to.equal('Title');
      assert.typeOf(el.cardTitle, 'String');

      expect(el.description).to.equal('Description');
      assert.typeOf(el.description, 'String');

      expect(el.hasImage).to.equal(false);
      assert.typeOf(el.hasImage, 'Boolean');
    });

    describe('View component in DOM', () => {
      it('Image is not displayed', () => {
        const image = el.shadowRoot?.querySelector('img');
        expect(image).to.equal(null);
      });

      it('Image displayed', async() => {
        el.hasImage = true;
        el.imageUrl = 'https://res.cloudinary.com/ddfoio9j1/image/upload/v1677799818/DevPortfolio/nasa-yZygONrUBe8-unsplash-2_kgcioe.jpg';
        await el.updateComplete;
        const image = el.shadowRoot?.querySelector('img');
        expect(image).not.to.be.null;
        expect(image.src).to.equal(el.imageUrl);
      });
    });

    describe('Change Props', () => {
      cleanComponent();

      it('View title in DOM', async () => {
        el.cardTitle = 'Test';
        await el.updateComplete;
        const title = el.shadowRoot?.querySelector('h3')?.textContent;
        expect(title).to.equal('Test');
      });

      it('View description in DOM', async () => {
        el.description = 'Cool Description';
        await el.updateComplete;
        const des = el.shadowRoot?.querySelector('p')?.textContent;
        expect(des).to.equal('Cool Description');
      });
    });
  });
});
