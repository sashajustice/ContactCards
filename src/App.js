import React, { Component } from 'react';
import './App.css';
import ContactCard from './ContactCard'

function App() {
    return (
   <div className="contacts">
            <ContactCard 
                contact={{name: "Mr. Whiskerson", imgUrl: "https://i.cbc.ca/1.4046240.1490814905!/fileImage/httpImage/image.png_gen/derivatives/16x9_780/acqua-de-gio.png", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "https://static1.squarespace.com/static/59dbeeaff6576e8869f3fbbc/t/5b2abcac575d1f14a07ac0c1/1529527474104/Willy+Cartier.jpg", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://3.bp.blogspot.com/-u8CRSri9rTg/T5udQKiU2dI/AAAAAAAAFVk/2UVC3C8sVJw/s1600/hot-male-models-04.jpg", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "https://i.pinimg.com/originals/b8/cb/b2/b8cbb29831425105891c3424980fc085.jpg", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
            
        </div>


    )
  }


export default App;
