import { useContext } from "react";
import Button from "../../../shared/ui/Button";
import FlexContainer from "../../../shared/ui/FlexContainer";
import Panel from "../../../shared/ui/Panel";
import Text from "../../../shared/ui/Text";
import { GoldContext } from "../../../app/contexts/GoldContext";
import { MoneyContext } from "../../../app/contexts/MoneyContext";
import { PickaxeContext } from "../../../app/contexts/PickaxeContent";
import { PageContext } from "../../../app/contexts/PageContext";

export default function ShopPage(){ 

    const { setPage } = useContext(PageContext);
    const { gold, removeGold } = useContext(GoldContext);
    const { money, addMoney, removeMoney } = useContext(MoneyContext);
    const { level, upgradePickaxe, getUpgradeCost } = useContext(PickaxeContext);
    
    const upgradeCost = getUpgradeCost();

    function sellGoldHandle(){
        if(gold > 0){
            removeGold(1);
            addMoney(10);
        }
    }
    function upgradePickaxeHandle(){
        if (money >= upgradeCost){
            removeMoney(upgradeCost);
            upgradePickaxe();
        }
    }

    return (
        <Panel>
            <FlexContainer>
                <Text size={30}>Магазин</Text>
                <Text>Золото: {gold}</Text>
                <Text>Деньги: {money}</Text> {/* ОШИБКА 2: написано "Магазин" вместо "Деньги" */}
                <Text>Уровень кирки: {level}</Text>
                <FlexContainer>
                    <Button clickAction={sellGoldHandle}>Продать золото (1 золото = 10$)</Button>
                    <Button clickAction={upgradePickaxeHandle}>Улучшить кирку до {level + 1} уровня ({upgradeCost}$)</Button>
                    <Button clickAction={() => setPage(0)}>В шахту</Button>
                </FlexContainer>
            </FlexContainer>
        </Panel>
    );
}