import { useState, ReactNode } from "react"
import { GoldContext, IGoldContext } from "../contexts/GoldContext"
interface IGoldProviderProps{
    children : ReactNode
}

export default function GoldProvider({children} :IGoldProviderProps){
    const [currentGold, setCurrentGold] = useState<number>(0)

    function addGold(value : number){
    setCurrentGold(currentGold + value)
    }

    function removeGold(value : number){
    setCurrentGold(currentGold - value)
    }

    const contextValue : IGoldContext = {
    gold : currentGold,
    addGold : addGold,
    removeGold : removeGold
    }

    return (
    <GoldContext value={contextValue}>
    {children}
    </GoldContext>
    );
}