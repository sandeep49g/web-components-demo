export const templates = {
    get userCardTemplate() {
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
                border-bottom: #000 1px solid;
            }

            .user-card img {
                width: 100%;
            }

            .user-card button {
                cursor: pointer;
                background: var(--brownColor);
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
                <h3></h3>
                <div class="info">
                <p><slot name="email">dasdfadfa</slot></p>
                <p><slot name="phone" /></p>
                </div>
                <button id="toggle-info">Hide Info</button>
            </div>
            </div>
        `;
        return template;
    }
}