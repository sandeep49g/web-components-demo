function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(domManipulation);


function domManipulation() {
    const rootSelector = document.querySelector(':root');
    const rootSelectorVars = getComputedStyle(rootSelector);
    console.log(rootSelectorVars.getPropertyValue('--brownColor'));
    // rootSelector.style.setProperty('--brownColor', 'orange');

    // setTimeout(() => {
    //     // console.log(document.querySelectorAll('user-card')[0].getAttribute('name'));
    //     // console.log(document.querySelectorAll('user-card')[0].shadowRoot.querySelector('img'));
    //     document.querySelectorAll('user-card')[0].removeAttribute('username');
    // }, 2000);
    
    // setTimeout(() => {
    //     document.querySelectorAll('user-card')[0].setAttribute('username', 'John Dae');
    // }, 4000);

    window.customElements.whenDefined('user-card').then(() => {
        // console.log(document.querySelectorAll('user-card')[0].getAttribute('username'));
        // console.log(document.querySelectorAll('user-card')[0].shadowRoot.querySelector('img'));

        const userCardSelectorAll = document.querySelectorAll('user-card');

        // userCardSelectorAll.forEach((userCardSelector) => {
        //     // Adopting Node, only for iFrames
        //     // if (userCardSelector.shadowRoot) {
        //     //     const userCardContainer = document.querySelector('#user-card-container');
        //     //     userCardContainer.appendChild(document.adoptNode(userCardSelector.shadowRoot.querySelector('img')));
        //     // }
        // });
        
        // console.log('hello: ' + document.querySelector('.slot-email').innerHTML); // Will work if slot template is coming from outside
        // console.log('hello: ' + userCardSelectorAll[0].shadowRoot.querySelector('.slot-email').innerHTML); // Will work if there is default slot template which will be in shadow root
    });
}