import imagenRickMorty from "./img/rick-morty.png"
import reqApi from "./api/reqApi";
import { Fragment, useState } from "react";
import './App.css';
import Characters from './Components/Characters'

function App() {
  const [characters, setCharacters]=useState(null)
  const BuscarPersonaje = ()=> { 
   reqApi().then(datos=>{setCharacters(datos)}); 
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        { 
        characters ? ( 
          <Characters characteres={characters} setCharacters={setCharacters}/>
        ) : ( 
          <Fragment> 
          <img src={imagenRickMorty} alt="Rick & Morty" className="img-home"></img>
          <button onClick={BuscarPersonaje} className="btn-search">Buscar Personaje</button>
          </Fragment>
        )
        }
       
        
      </header>
    </div>
  );
}

export default App;
