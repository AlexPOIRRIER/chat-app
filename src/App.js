import React from 'react';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Contact 
      name='Dwayne Pierce'
      avatar='https://randomuser.me/api/portraits/men/75.jpg'
      online
      />
      <Contact
      name='Brooklyn Jenkins'
      avatar='https://randomuser.me/api/portraits/women/95.jpg'
      online
      />
      <Contact
      name='Wayne Burns' 
      avatar='https://randomuser.me/api/portraits/men/52.jpg'
      />      
    </div>
  );
}

export default App;
