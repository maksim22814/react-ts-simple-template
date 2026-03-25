import { createContext } from "react"

export interface IGoldContext {
    readonly gold : number,
    addGold : (value : number) => void,
    removeGold : (value : number) => void
}

export const GoldContext = createContext<IGoldContext>(
    {
    gold: 0,
    addGold: () => {},
    removeGold: () => {}
    }
)