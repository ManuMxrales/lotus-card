import { html, LitElement, nothing } from 'lit';
import { when } from 'lit/directives/when.js';
import { classMap } from 'lit/directives/class-map.js';
import style from './styles/LotusCard.js';

export class LotusCard extends LitElement {
  static get styles() {
    return [style];
  }

  static get properties() {
    return {
      variant: { type: String },
      isClickable: { type: Boolean, attribute: 'is-clickable' },
      cardTitle: { type: String, attribute: 'card-title' },
      description: { type: String },
      imageUrl: { type: String, attribute: 'image-url' },
      hasImage: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.variant = 'default';
    this.cardTitle = 'Title';
    this.description = 'Description';
    this.hasImage = false;
    this.imageUrl = '';
    this.isClickable = false;
  }

  get _cardImage() {
    return html` ${when(
      this.hasImage,
      () => html`<img src="${this.imageUrl}" alt="${this.cardTitle}" />`,
      () => nothing
    )}`;
  }

  get _cardText() {
    return html`
      ${this.cardTitle ? html`<h3>${this.cardTitle}</h3>` : nothing}
      ${this.description ? html`<p>${this.description}</p>` : nothing}
    `;
  }

  _renderDefault() {
    const classList = {
      clickable: this.isClickable,
    };
    return html`
      <div class="card ${classMap(classList)}">
        ${this._cardImage}
        <div class="content">${this._cardText}</div>
      </div>
    `;
  }

  _renderCircle() {
    const classList = {
      radiusHover: this.isClickable,
    };
    return html`
      <div class="circle ${classMap(classList)}">
        ${this._cardImage}
        <div class="content">${this._cardText}</div>
      </div>
    `;
  }

  render() {
    return html`
      ${this.variant === 'circle'
        ? this._renderCircle()
        : this._renderDefault()}
    `;
  }
}
