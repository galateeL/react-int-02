import logo from './logo.svg';
import './App.css';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import React, {useState} from 'react';

const sampleSimpson = {
    quote:
      "These are my only friends...grown-up nerds like Gore Vidal. And even he's kissed more boys than I ever will.",
    character: 'Lisa Simpson',
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083',
    characterDirection: 'Right',
  };

function App() {

  const [simpson, displaySimpsons] = useState();

  const getNewQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      
      .then((data) => {
        console.log(data);
        displaySimpsons(data[0]);
      });
  };

  return (
    <div className="App">
      <QuoteCard {...simpson} />
      <button type="button" onClick={getNewQuote}>New quote !</button>
    </div>
  );
}

export default App;