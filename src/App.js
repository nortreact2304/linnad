import logo from './logo.svg';
import './App.css';
import Linn from './Linn';

import pariisPilt from './pildid/pariis.png'
import londonPilt from './pildid/london.jpg'

function App() {

  const linn1 = {
    nimi: "Pariis",
    kirjeldus: "Paris (English: /ˈpærɪs/; French pronunciation: ​[paʁi] (listen)) is the capital and most populous city of France, with an official estimated population of 2,102,650 residents as of 1 January 2023[2] in an area of more than 105 km² (41 sq mi),[5] making it the fourth-most populated city in the European Union as well as the 30th most densely populated city in the world in 2022.",
    pilt: pariisPilt
  }
  const linn2 = {
    nimi: "London",
    kirjeldus: "London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.[1] It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.[9] The City of London, its ancient core and financial centre, was founded by the Romans as Londinium and retains its medieval boundaries.[",
    pilt: londonPilt
  }
  const linn3 = {
    nimi: "Pärnu",
    kirjeldus: "Trartartartar",
    pilt: londonPilt
  }

  const linnad = [
    linn1, 
    linn2, 
    linn3,
    {
      nimi: "Viljandi",
      kirjeldus: "Viljandi on tore linn",
      pilt: pariisPilt
    }
  ]

  const lisaLinn = () => {
    console.log("Lisame linna!")
  }

  return (
    <div className="konteiner">
      <button onClick={lisaLinn} >Lisa linn</button>
      {linnad.map((linn, index) => {
        return (
        <Linn 
          key={index}
          linnaNimi={linn.nimi} 
          kirjeldus={linn.kirjeldus} 
          pilt={linn.pilt} 
        />)
      })}
    </div>
  );
}

export default App;
