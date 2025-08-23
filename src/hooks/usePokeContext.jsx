import { useContext } from "react";
import { PokeContext } from "../context/pokeContext";

export default function usePokeContext() {
  const context = useContext(PokeContext);
  if (!context) {
    throw new Error("usePokeContext must be within a PokeContextProvider");
  }
  return context;
}
