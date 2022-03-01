import './App.scss';
import React, { useState } from "react";

// import 'sandeep49g-web-component1-demo';
import "../web-components/web-comp-demo1";

const App = () => {
    const [user1, setUser1] = useState('John Dae');
    const [user2, setUser2] = useState('Mary Dae');

    return (
    <>
      <h2>Hello world {user1}</h2>
      <user-card
        name={user1}
        avatar={"https://randomuser.me/api/portraits/men/9.jpg"}
      >
        <div slot="email">johndoe@gmail.com</div>
        <div slot="phone">555-555-5555</div>
      </user-card>

      <user-card
        name={user2}
        avatar={"https://randomuser.me/api/portraits/women/8.jpg"}
      >
        <div slot="email">janedoe@gmail.com</div>
        <div slot="phone">333-333-3333</div>
      </user-card>

      <button onClick={() => { setUser1('sandeep');}}>Hello</button>
    </>
  );
};

export default App;
