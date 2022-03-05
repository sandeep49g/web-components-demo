export const templates = {
    get userCardTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #fff;
                    --brownColor: green;
                    /* @apply --typography; */
                }
                
                :host * {
                    box-sizing: border-box;
                }

                :host div.some-box {
                    background: #ccc;
                    color: green;
                }

                ::slotted(div.slot-email) {
                    color: green;
                }

                ::slotted(p) {
                    color: blue;
                }
                
                .user-card {
                    font-family: 'Arial', sans-serif;
                    background: #f4f4f4;
                    width: 800px;
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    grid-gap: 10px;
                    margin-bottom: 15px;
                    border-bottom: #000 1px solid;
                }
                
                .user-card img {
                    width: 100%;
                }
                
                .user-card button {
                    cursor: pointer;
                    background: var(--blackColor, #000);
                    color: #fff;
                    border: 0;
                    border-radius: 5px;
                    padding: 5px 10px;
                    margin-bottom: 10px;
                }
                
                h2 {
                    color: var(--brownColor, orange)
                }               
            </style>
            <div class="user-card">
                <img />
                <div>
                    <h2>I am Web Component NEW</h2>
                    <div part="some-box" class="some-box"><span>I am shared part which injectable from outside without css variable</span></div>
                    <div part="some-box2" class="some-box2"><span>I am shared part 2 which injectable from outside without css variable</span></div>
                    <h3></h3>
                    <div class="info">
                        <slot name="email" class="slot-email">
                            <p>Default Email</p>
                        </slot>
                        <p>
                            <slot name="phone">
                                Default Phone
                            </slot>
                        </p>
                    </div>
                    <button id="toggle-info">Hide Info</button>
                </div>
            </div>
        `;
        return template;
    }
}