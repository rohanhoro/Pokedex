import { useState } from "react";
import inputBox from "../assets/input_box.svg";
import leftButton from "../assets/pokedex_button_left.svg";
import rightButton from "../assets/pokedex_button_right.svg";
import usePokeContext from "../hooks/usePokeContext";

export default function PokeDexButtons() {
  const [inputValue, setInputValue] = useState("");
  const { pokeData, pokeId, setPokeId } = usePokeContext();
  console.log(pokeId);

  const handleInput = (e) => {
    const input = e.target.value;
    setInputValue(parseInt(input));
  };

  const handleClick = () => {
    if (inputValue < 1 || inputValue > 1025) {
      alert("Enter a number between 1 and 1025");
      setInputValue("");
    } else {
      setPokeId(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="relative">
      <div className="flex justify-between ">
        <button
          style={{
            // backgroundImage: `url("${left_button}")`,
            WebkitMask: `url("${leftButton}")`,
            mask: `url("${leftButton}")`,
          }}
          className={`w-full max-w-[170px] aspect-[170/60] bg-[#990a0a] hover:bg-red-400 active:bg-red-400 hover:shadow-2xl text-white hover:scale-101 transition cursor-pointer`}
          onClick={
            () => (pokeId === 1 ? setPokeId(1025) : setPokeId(pokeId - 1)) //left button function
          }
        >
          #{pokeData?.id === 1 ? "1025" : pokeId - 1}
        </button>
        <button
          style={{
            // backgroundImage: `url("${left_button}")`,
            WebkitMask: `url("${rightButton}")`,
            mask: `url("${rightButton}")`,
          }}
          className="w-full max-w-[170px] aspect-[170/60] bg-[#990a0a] hover:bg-red-400 active:bg-red-400 hover:shadow-2xl text-white hover:scale-101 transition cursor-pointer"
          onClick={
            () => (pokeId === 1025 ? setPokeId(1) : setPokeId(pokeId + 1)) //right button function
          }
        >
          #{pokeData?.id === 1025 ? "1" : pokeId + 1}
        </button>
      </div>
      <div className="absolute flex flex-col gap-1 items-center justify-center top-0 left-[50%] -translate-x-[50%]">
        <input
          type="text"
          value={inputValue}
          className="text-black w-[174px] h-[26px] mask-contain mask-no-repeat bg-[#fff] focus:outline-none text-center"
          placeholder="Index no. here"
          style={{
            WebkitMask: `url("${inputBox}")`,
            mask: `url("${inputBox}")`,
          }}
          onChange={handleInput}
        />
        <button
          className="w-[52px] h-[30px] bg-[#ffffff] text-black font-medium hover:bg-blue-400 active:bg-blue-400 cursor-pointer"
          onClick={handleClick}
        >
          Go
        </button>
      </div>
    </div>
  );
}
