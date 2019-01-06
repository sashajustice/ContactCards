import React, { Component } from 'react';
import './App.css';
import ContactCard from './ContactCard'

function App(props) {
    return (
      <div className="contact-cards">
      <img src={props.imgUrl}/>
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
     
      </div>
    )
  }


export default App;
