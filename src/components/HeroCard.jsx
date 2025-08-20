import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PokemonType from "./PokemonType";
import PokeStats from "./PokeStats";

export default function HeroCard({ data: pokeData }) {
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(pokeData);

  const audioRef = useRef(null);

  const playAudio = async () => {
    setIsPlaying(true);

    audioRef.current.play();
  };

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audioElement.addEventListener("ended", handleEnded);

    return () => audioElement.removeEventListener("ended", handleEnded);
  }, [isPlaying]);

  return (
    <div className="text-white border-r-0 border-b-0 hover:scale-101 shadow-xl hover:shadow-2xl transition w-100 min-h-150 rounded-lg backdrop-blur-sm py-4 px-8">
      {pokeData && (
        <div>
          <div>
            <img
              src={pokeData.sprites.other.home.front_default}
              alt={`${pokeData.name}_img`}
            />
          </div>
          <div className="text-center capitalize font-bold text-4xl mt-4">
            {pokeData.name}{" "}
            <span className="font-normal text-3xl text-gray-200">
              #{pokeData.id}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <div>{pokeData.height / 10} m</div>
              <div>Height</div>
            </div>
            <PokemonType data={pokeData} />
            <div>
              <div>{pokeData.weight / 10} kg</div>
              <div>Weight</div>
            </div>
          </div>
          <div>
            <PokeStats data={pokeData} />
          </div>
          <div>
            <button className="cursor-pointer m-2" onClick={playAudio}>
              {isPlaying ? <Pause fill="white" /> : <Play fill="white" />}
            </button>
            <audio src={pokeData.cries.latest} ref={audioRef} />
          </div>
        </div>
      )}
    </div>
  );
}
