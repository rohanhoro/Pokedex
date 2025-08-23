import { useState } from "react";
import { PokeContext } from "./pokeContext";

export default function PokeContextProvider({ children }) {
  const [pokeData, setPokeData] = useState();
  const [pokeId, setPokeId] = useState(1);
  
  return (
    <PokeContext.Provider value={{ pokeData, setPokeData, pokeId, setPokeId }}>
      {children}
    </PokeContext.Provider>
  );
}
