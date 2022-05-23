import { createContext, useContext } from "react";
import useCharacter from "../hooks/useCharacter";
import type { Store } from "../types";
import { initState } from "../hooks/useCharacter";

const CharacterContext = createContext<Store>(initState)

export default CharacterContext;
