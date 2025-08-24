import { useEffect } from "react";
import axiosInstance from "./api/axiosInstance";
import "./App.css";
import bg from "./assets/pokemon_bg.jpg";
import CardGrid from "./components/CardGrid";
import HeroCard from "./components/HeroCard";
import PokeDexButtons from "./components/PokeDexButtons";
import PokemonDetailedCard from "./components/PokemonDetailedCard";
import usePokeContext from "./hooks/usePokeContext";

function App() {
  const { pokeId, setPokeData } = usePokeContext();

  useEffect(() => {
    const handleApiCall = async () => {
      try {
        const response = (await axiosInstance.get(`/pokemon/${pokeId}`)).data;

        setPokeData(response);
      } catch (error) {
        console.error(error);
      }
    };
    handleApiCall();
  }, [pokeId]);

  // const handleOnClick = () => {
  //   let num = Math.floor(Math.random() * 1025) + 1;
  //   setPokeId(num);
  // };

  return (
    <div
      className="flex flex-col justify-center items-center bg-teal-950 min-h-screen w-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `URL(${bg})`,
      }}
    >
      {/* <button className="border-2 cursor-pointer" onClick={handleOnClick}>
        Random
      </button> */}
      {/* <PokeDexButtons data={pokeData} /> */}

      <PokemonDetailedCard />
      {/* <CardGrid /> */}
    </div>
  );
}

export default App;
