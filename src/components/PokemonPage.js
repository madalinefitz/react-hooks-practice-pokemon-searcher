import {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  
  const [pokemonData, setPokemonData] = useState([])
  useEffect(()=> {
    fetch ("http://localhost:3001/pokemon") 
      .then(r=>r.json())
      .then(setPokemonData)
  }, [])
  
  
  const handleNewPokemon = (newPokemon)=>{
    setPokemonData([...pokemonData, newPokemon])
  }

  const [searchedString, setSearchedString] = useState('')
  
  const toggleSearch = favPokemon => {
      setSearchedString(favPokemon.toLowerCase())
      console.log(favPokemon)
  }
  
  
  const searchedPokemon = pokemonData.filter(pokemon => {
     if (pokemon.name.toLowerCase().includes(searchedString)) {
      return true
     }
  })
  
    return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleNewPokemon={handleNewPokemon}/>
      <br />
      <Search toggleSearch={toggleSearch}/>
      <br />
      <PokemonCollection pokemonData={searchedPokemon}/>
    </Container>
  );
}

export default PokemonPage;
