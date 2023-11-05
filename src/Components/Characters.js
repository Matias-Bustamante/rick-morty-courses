import { Fragment } from "react";

export default function Characters(props) { 
    const {characteres, setCharacters}=props; 
    
    const Resetear = () => { 
        setCharacters(null); 
    }
    return (
        <div className="characters"> 
         <h1>
        Personaje
        </h1>
        <span className="back-home" onClick={Resetear}>Volver a la Home </span>
        <div className="container-characters"> 
        { 
        characteres.map((character, index)=> ( 
            <div className="character-container" key={index}> 
                <div> 
                    <img src={character.image} alt={character.name}/>
                    </div>
                    <div> 
                        <h3>{character.name}</h3>
                        <h6> 
                            { 
                            character.status==="Alive" ? ( 
                                <Fragment> 
                                    <span className="alive"/>{character.status}
                                </Fragment>
                            ): ( 
                                <Fragment> 
                                    <span className="dead"/> 
                                        Dead
                                
                                </Fragment>
                            )
                            }

                        </h6>
                        <p> 
                            <span className="text-grey">
                               Episodios:
                            </span>
                            <span> 
                                {character.episode.length}
                            </span>
                        </p> 
                        <p> 
                            <span className="text-grey"> 
                            Especie: 
                            </span>
                            <span> 
                                {character.species}
                            </span>
                        </p>
                        </div>
             </div> 
        ))}
        </div>
        <span className="back-home" onClick={Resetear}>Volver a la Home</span>
        </div>
   
    ); 
}