export class AstroAmplitudeEvents extends HTMLElement {
  constructor() {
    super();
    globalThis.amplitude.getInstance().logEvent(this.dataset.title);

  }
}

customElements.define('astro-amplitude-events', AstroAmplitudeEvents);