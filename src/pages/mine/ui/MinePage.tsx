import Button from "../../../shared/ui/Button";
import FlexContainer from "../../../shared/ui/FlexContainer";
import Panel from "../../../shared/ui/Panel";
import Text from "../../../shared/ui/Text";
import { useContext } from "react";
import { GoldContext } from "../../../app/contexts/GoldContext";
import { PickaxeContext } from "../../../app/contexts/PickaxeContent";
import { PageContext } from "../../../app/contexts/PageContext";

export default function MinePage() {
    const {setPage} = useContext(PageContext);
    const {gold, addGold} = useContext(GoldContext);
    const {level, getMiningPower} = useContext(PickaxeContext);

    const miningPower = getMiningPower();

    function mineHandle() {
        addGold(miningPower);
    }

    return (
        <Panel>
        <FlexContainer>
                <Text size={30}>Шахта</Text>
                <Text>Золото: {gold}</Text>
                <Text>Кирка {level} уровня (сила: +{miningPower})</Text>
            
            <FlexContainer>
            <Button clickAction={mineHandle}>Копать (+{miningPower} золота)</Button>
            <Button clickAction={() => {setPage(1)}}>Магазин</Button>
            </FlexContainer>
        </FlexContainer>
        </Panel>
    );
}