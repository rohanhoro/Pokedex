import { useEffect, useState } from "react";
import "./App.css";
import bg from "./assets/pokemon_bg.jpg";
import CardGrid from "./components/CardGrid";
import axiosInstance from "./api/axiosInstance";
import HeroCard from "./components/HeroCard";

function App() {
  const [pokeData, setPokeData] = useState();
  const [pokeId, setPokeId] = useState(25);

  

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

  const handleOnClick = () => {
    let num = Math.floor(Math.random() * 1025) + 1;
    setPokeId(num);
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-teal-950 min-h-screen w-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `URL(${bg})`,
      }}
    >
      <button className="border-2 cursor-pointer" onClick={handleOnClick}>
        Random
      </button>
      <HeroCard data={pokeData}/>
      <CardGrid />
    </div>
  );
}

export default App;
