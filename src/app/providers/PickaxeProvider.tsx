import { ReactNode, useState} from "react";
import { PickaxeContext, IPickaxeContext } from "../contexts/PickaxeContent";

interface IPickaxeProviderProps{
    children : ReactNode
}

export default function PickaxeProvider({children} : IPickaxeProviderProps){
    const [currentLevel, setCurrentLevel] = useState<number>(1)

    function getMiningPower(): number{
        return Math.pow(2, currentLevel - 1)
    }

    function getUpgradeCost(): number{
        return Math.pow(currentLevel, 2) * 100
    }

    function upgradePickaxe(): void{
        setCurrentLevel(currentLevel + 1)
    }
    const contextValue : IPickaxeContext ={
        level : currentLevel,
        upgradePickaxe : upgradePickaxe,
        getMiningPower : getMiningPower,
        getUpgradeCost : getUpgradeCost
    }

    return (
        <PickaxeContext value={contextValue}>
            {children}
        </PickaxeContext>
    )
}