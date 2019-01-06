import React from 'react'

function ContactCard(props) {
  return (
      <div className="contact-cards">
      <img src={props.imgUrl}/>
      <h3>{props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>

    )
}

export default ContactCard