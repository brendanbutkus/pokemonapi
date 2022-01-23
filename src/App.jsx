import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';

function App() {

  const [pokemons, setPokemons] = useState([]);
  // const [name, setName] = useState("");

  const onClickHandler = () => {

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setPokemons(res.results)
    })
    .catch(err => console.log(err))


  }
  return (
    <div className="App">
        <button onClick={onClickHandler} className='btn btn-lg btn-secondary'>Fetch Pokemon</button>
      
      {
        pokemons.map( (pokemon, i) => {
          return <ul key={i}><li>{pokemon.name}</li></ul>
        })
      }
  </div>
);
          
       
              
            

}

export default App;
