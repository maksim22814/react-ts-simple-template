import {createContext} from "react";
export interface IMoneyContext{
    readonly money : number,
    addMoney : (value : number) => void,
    removeMoney : (value : number) => void
}

export const MoneyContext = createContext<IMoneyContext>(
    {
        money: 0,
        addMoney: () => {},
        removeMoney: () => {}
    }
)