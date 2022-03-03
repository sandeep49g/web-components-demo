import './App.scss';
import React, { useState, useEffect } from "react";

// import 'sandeep49g-web-component1-demo';
import "../web-components/web-comp-demo1";
import "./web-comp-demo1-interaction";

const App = () => {
    const [user1, setUser1] = useState('John Dae');
    const [user2, setUser2] = useState('Mary Dae');

    useEffect(() => {
        window.customElements.whenDefined('user-card').then(() => {
            const userCardSelectorAll = document.querySelectorAll('user-card');
            // If want to pass complex data as prop in web component
            userCardSelectorAll[0].data = {
                fname: 'sandeep',
                lname: 'garg',
                username: user1,
                avatar: 'https://randomuser.me/api/portraits/men/9.jpg'
            }

            setTimeout(() => {
                userCardSelectorAll[0].data = {
                    fname: 'Paritosh',
                    lname: 'garg',
                    username: 'Paritosh'
                };
            }, 4000);
            
            setTimeout(() => {
                userCardSelectorAll[0].data = {
                    fname: 'Nishant',
                    lname: 'garg',
                    username: 'Nishant'
                };
            }, 6000);
        });
    }, [user1]);

    return (
    <>
      <h2>Hello world</h2>
      <user-card
        // username={user1}
        avatar={"https://randomuser.me/api/portraits/men/9.jpg"}
      >
        <div className='slot-email' id="slot-email" slot="email">johndoe@gmail.com</div>
        <div slot="phone">555-555-5555</div>
      </user-card>

      <user-card
        username={user2}
        avatar={"https://randomuser.me/api/portraits/women/8.jpg"}
      >
        <div className='slot-email' id="slot-email" slot="email">janedoe@gmail.com</div>
        <div slot="phone">333-333-3333</div>
      </user-card>

      <button onClick={() => { setUser1('sandeep');}}>Update Name 1</button>
      <button onClick={() => { setUser2('sanjay');}}>Update Name 2</button>

      {/* <div id='user-card-container'></div> */}
      
    </>
  );
};

export default App;
