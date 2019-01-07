import React, { Component } from 'react';
import './App.css';
import ContactCard from './ContactCard'

function App(props) {
    return (
      <div className="contacts">
        <ContactCard
          contact={{name: "David Ryan, imgUrl: "", phone: "(510) 222-1234", email: "davidryan@gmail.com}}
      />

      <ContactCard
         contact={{name: "Yuri Navastriz, imgUrl: "", phone: "(646) 651-1298", email: "YuriNavastriz@gmail.com}}
      />


     <ContactCard
     contact={{name: "Michael Androz, imgUrl: "", phone: "(510) 254-1255", email: "MichaelAndroz@gmail.com}}
      />


    )
  }


export default App;
