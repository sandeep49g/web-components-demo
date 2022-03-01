const template = document.createElement('template');
template.innerHTML = `
  <style>
  .user-card {
		font-family: 'Arial', sans-serif;
		background: #f4f4f4;
		width: 500px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-gap: 10px;
		margin-bottom: 15px;
		border-bottom: darkorchid 5px solid;
	}

	.user-card img {
		width: 100%;
	}

	.user-card button {
		cursor: pointer;
		background: darkorchid;
		color: #fff;
		border: 0;
		border-radius: 5px;
		padding: 5px 10px;
	}

  h2 {
    color: var(--brownColor);
  }
  </style>
  <div class="user-card">
    <img />
    <div>
      <h2>I am Web Component NEW</h2>
      <h3></h3>
      <div class="info">
        <p><slot name="email" /></p>
        <p><slot name="phone" /></p>
      </div>
      <button id="toggle-info">Hide Info</button>
    </div>
  </div>
`;

export class UserCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  // toggleInfo() {
  //   this.showInfo = !this.showInfo;

  //   const info = this.shadowRoot.querySelector('.info');
  //   const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

  //   if(this.showInfo) {
  //     info.style.display = 'block';
  //     toggleBtn.innerText = 'Hide Info';
  //   } else {
  //     info.style.display = 'none';
  //     toggleBtn.innerText = 'Show Info';
  //   }

  //   toggleBtn.dispatchEvent(new CustomEvent("clicked", {
  //     detail: 'I am clicked'
  //   }));
  // }

  static get observedAttributes() {
    return ['name'];
  }

  connectedCallback() {
    console.log('mounted');

    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

    // this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
    // this.shadowRoot.querySelector('#toggle-info').addEventListener('clicked', (evt) => {
    //   console.log(evt.detail);
    // });
  }

  disconnectedCallback() {
    console.log('unmounted');

    // this.shadowRoot.querySelector('#toggle-info').removeEventListener();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
     return;
    }
    console.log(`The attribute ${name} has changed`);
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    // this.shadowRoot.querySelector('h3').innerText = newValue;
  }
}

{
  const rootSelector = document.querySelector(':root');
  const rootSelectorVars = getComputedStyle(rootSelector);
  console.log(rootSelectorVars.getPropertyValue('--brownColor'));

  // rootSelector.style.setProperty('--brownColor', 'orange');  
 
}

