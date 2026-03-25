import { createContext } from "react";

export interface IPickaxeContext{
    readonly level : number,
    upgradePickaxe : () => void,
    getMiningPower : () => number,
    getUpgradeCost : () => number
}

export const PickaxeContext = createContext<IPickaxeContext>(
    {
        level: 1,
        upgradePickaxe: () => {},
        getMiningPower: () => 1,
        getUpgradeCost: () => 0
    }
)