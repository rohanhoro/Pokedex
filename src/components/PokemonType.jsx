import bugIcon from "../assets/types-icons/Bug_icon.png";
import darkicon from "../assets/types-icons/Dark_icon.png";
import dragonIcon from "../assets/types-icons/Dragon_icon.png";
import electricIcon from "../assets/types-icons/Electric_icon.png";
import fairyIcon from "../assets/types-icons/Fairy_icon.png";
import fightingIcon from "../assets/types-icons/Fighting_icon.png";
import fireIcon from "../assets/types-icons/Fire_icon.png";
import flyingIcon from "../assets/types-icons/Flying_icon.png";
import ghostIcon from "../assets/types-icons/Ghost_icon.png";
import grassIcon from "../assets/types-icons/Grass_icon.png";
import groundIcon from "../assets/types-icons/Ground_icon.png";
import iceIcon from "../assets/types-icons/Ice_icon.png";
import normalIcon from "../assets/types-icons/Normal_icon.png";
import poisonIcon from "../assets/types-icons/Poison_icon.png";
import psychicIcon from "../assets/types-icons/Psychic_icon.png";
import rockIcon from "../assets/types-icons/Rock_icon.png";
import steelIcon from "../assets/types-icons/Steel_icon.png";
import stellarIcon from "../assets/types-icons/Stellar_icon.png";
import waterIcon from "../assets/types-icons/Water_icon.png";

// Array received in api call is of the type
// const arr = [
//     {
//         slot: number,
//         type:{
//             name:string,
//             url:string
//         }
//     }
// ]

//Switch case for the types

const renderPokeTypes = (data) => {
  switch (data.type.name) {
    case "normal":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#9fa19f] rounded-full p-1.5">
            <img src={normalIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "fire":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#e62829] rounded-full p-1.5">
            <img src={fireIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "fighting":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#ff8000] rounded-full p-1.5">
            <img src={fightingIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "water":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#297fed] rounded-full p-1.5">
            <img src={waterIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "flying":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#80b9ef] rounded-full p-1.5">
            <img src={flyingIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "grass":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#3fa129] rounded-full p-1.5">
            <img src={grassIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "poison":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#9141cb] rounded-full p-1.5">
            <img src={poisonIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "electric":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#fac000] rounded-full p-1.5">
            <img src={electricIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "ground":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#915121] rounded-full p-1.5">
            <img src={groundIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "psychic":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#ef4079] rounded-full p-1.5">
            <img src={psychicIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "rock":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#afa981] rounded-full p-1.5">
            <img src={rockIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "ice":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#3dcef3] rounded-full p-1.5">
            <img src={iceIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "bug":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#91a119] rounded-full p-1.5">
            <img src={bugIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "dragon":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#4d5cd7] rounded-full p-1.5">
            <img src={dragonIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "ghost":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#704170] rounded-full p-1.5">
            <img src={ghostIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "dark":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#624d4e] rounded-full p-1.5">
            <img src={darkicon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "steel":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#60a1b8] rounded-full p-1.5">
            <img src={steelIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "fairy":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#ef70ef] rounded-full p-1.5">
            <img src={fairyIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
    case "stellar":
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#40b5a5] rounded-full p-1.5">
            <img src={stellarIcon} className="w-6" />
          </div>
          <div>{data.type.name}</div>
        </div>
      );
  }
};

export default function PokemonType({ data: pokeData }) {
  return (
    <div className="flex gap-8 items-center justify-center mt-4">
      {pokeData.types.map((data) => (
        <div key={data.slot} className="capitalize">
          {renderPokeTypes(data)}
        </div>
      ))}
    </div>
  );
}

{
  /* <div>
  <div key={data.slot}>{data.type.name}</div>

  <div className="flex flex-col items-center justify-center">
    <div className="bg-[#91a119] rounded-full p-1.5">
      <img src={bugIcon} className="w-6" />
    </div>
    <span>Bug</span>
  </div>
</div>; */
}
