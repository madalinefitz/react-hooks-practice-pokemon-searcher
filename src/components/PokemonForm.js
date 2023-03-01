import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {
  
  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  
  
  const submitForm = (e)=>{
      e.preventDefault()
      const pokemonInfo = {
        name: name,
        hp: hp,
        sprites: {
          front: front,
          back: back,
        },
      }

      fetch ("http://localhost:3001/pokemon", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(pokemonInfo),
            })
        .then(r => r.json())
        .then(newPokemon=>handleNewPokemon(newPokemon))

      setName('')
      setHp('')
      setFront('')
      setBack('')
  }

  const handleNameChange = e => setName(e.target.value)
  const handleHpChange = e => setHp(e.target.value)
  const handleFrontChange = e => setFront(e.target.value)
  const handleBackChange = e => setBack(e.target.value)
  
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={submitForm}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleNameChange} value={name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleHpChange} value={hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFrontChange}
            value={front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBackChange}
            value={back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
