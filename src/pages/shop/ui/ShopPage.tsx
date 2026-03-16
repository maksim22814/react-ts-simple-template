import Button from "../../../shared/ui/Button";
import FlexContainer from "../../../shared/ui/FlexContainer";
import Panel from "../../../shared/ui/Panel";
import Text from "../../../shared/ui/Text";

export default function ShopPage(){
    return <Panel>
        <FlexContainer>
            <Text size={30}>Магазин</Text>
            <Text>Золото: 0</Text>
        
        <FlexContainer>
            <Button>Улучшить кирку</Button>
            <Button>В шахту</Button>
        </FlexContainer>
        </FlexContainer>
    </Panel>
}