import './public-path'

import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.css';
import App from './App';

class ReactMFE extends HTMLElement {
  #rootID = 'app-element'
  #appInstance = null

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render()
  }

  cleanTree() {
    const currentElement = this.shadowRoot.getElementById(this.#rootID);

    if (currentElement) {
      this.shadowRoot.removeChild(currentElement);
    }

    this.#appInstance?.unmount();
  }

  render() {
    const element = document.createElement('div');

    element.id = this.#rootID;

    this.cleanTree();

    styles.use({ target: this.shadowRoot });

    this.#appInstance = ReactDOM.createRoot(element);

    this.#appInstance.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    this.shadowRoot.appendChild(element);
  }
}

customElements.define('react-mfe', ReactMFE);