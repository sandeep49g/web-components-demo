import { templates } from './templates';

export class UserCard extends HTMLElement {
  // username = '';
  // avatar = '';
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    // this.shadowRoot.appendChild(templates.userCardTemplate.content);
    this.shadowRoot.appendChild(templates.userCardTemplate.content.cloneNode(true));
    // this.shadowRoot.appendChild(document.importNode(templates.userCardTemplate.content, true));
    this.render();
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    const info = this.shadowRoot.querySelector('.info');
    const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

    if(this.showInfo) {
      info.style.display = 'block';
      toggleBtn.innerText = 'Hide Info';
    } else {
      info.style.display = 'none';
      toggleBtn.innerText = 'Show Info';
    }

    toggleBtn.dispatchEvent(new CustomEvent("clicked", {
      detail: `${this.shadowRoot.querySelector('h3').innerText} : I am clicked`
    }));
  }

  static get observedAttributes() {
    return ['username', 'avatar'];
  }

  set data(data) {
    console.log('set data: ' + data.fname);
    console.log('set data: ' + data.lname);
    this.h3Element.textContent = data.username;
  }

  connectedCallback() {
    console.log('mounted');
    // this.render();
    
    // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('username');
    // this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

    this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    this.shadowRoot.querySelector('#toggle-info').addEventListener('clicked', (evt) => {
      console.log(evt.detail);
    });
  }

  disconnectedCallback() {
    console.log('unmounted');

    this.shadowRoot.querySelector('#toggle-info').removeEventListener('click', null);
    this.shadowRoot.querySelector('#toggle-info').removeEventListener('clicked', null);
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue === newValue) {
     return;
    }
    console.log(`The attribute ${attrName} has changed`);

    switch(attrName) {
      case 'username':
        this.h3Element.textContent = newValue;
        break;
      case 'avatar':
        // this.imgElement.src = newValue;
        this.imgElement.setAttribute('src', newValue);
        break;
    }

    // this[attrName] = newValue;
    // this.render();

    // if (attrName === 'username')
    // this.shadowRoot.querySelector('h3').innerText = this.username;

    // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('username');
    // this.shadowRoot.querySelector('h3').innerText = newValue;
    // console.log(this.hasAttribute('username'));
  }

  // only for iFrames
  adoptedCallback() {
    console.log('Adopted');
  }

  // get template() {
  //   return `
  //     <style></style>
  //     <div class="user-card"></div>
  //   `;
  // }

  render() {
    // this.shadowRoot.innerHTML = this.template;

    // this.shadowRoot.appendChild(templates.userCardTemplate.content);

    // const templateElement = document.getElementById('user-card-template');
    // this.shadowRoot.appendChild(templateElement.content);

    this.h3Element = this.shadowRoot.querySelector('h3');
    this.imgElement = this.shadowRoot.querySelector('img');
  }
}
