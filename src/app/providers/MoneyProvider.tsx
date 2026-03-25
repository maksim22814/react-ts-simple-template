import { ReactNode, useState } from "react";
import { MoneyContext, IMoneyContext } from "../contexts/MoneyContext";

interface IMoneyProviderProps {
    children: ReactNode
}

export default function MoneyProvider({ children }: IMoneyProviderProps) {
    const [currentMoney, setCurrentMoney] = useState<number>(0)

    function addMoney(value: number) {
        setCurrentMoney(prevMoney => prevMoney + value)
    }

    function removeMoney(value: number) {
        setCurrentMoney(prevMoney => prevMoney - value)
    }

    const contextValue: IMoneyContext = {
        money: currentMoney,
        addMoney: addMoney,
        removeMoney: removeMoney
    };

    return (
        <MoneyContext value={contextValue}>
            {children}
        </MoneyContext>
    );
}