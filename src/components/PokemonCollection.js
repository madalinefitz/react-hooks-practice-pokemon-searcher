import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonData}) {
  
  const pokemonCards = pokemonData.map((pokemon) => {
      return( <PokemonCard key={pokemon.id} {...pokemon}/>

      )
  })
  
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonCards}
    </Card.Group>
  );
}

export default PokemonCollection;
