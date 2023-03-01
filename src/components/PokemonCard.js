import {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, sprites}) {
  console.log(sprites.front)
  const [showFront, setShowFront] = useState(true)
  const toggleSprites = ()=>{
    setShowFront(!showFront)
  }

  return (
    <Card>
      <div>
        <div onClick={toggleSprites} className="image">
          {showFront ?
          <img src={sprites.front} alt={name} />:
          <img src={sprites.back} alt={name} />
          }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
