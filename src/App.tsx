import Panel from "./shared/ui/Panel";
import Text from "./shared/ui/Text";

function App() {
    return (
        <Panel margin={25} padding={25}>            {/*|  Удалите пример и        */}
            <Text size={24}> Hello, React! </Text>  {/*|  создайте свой компонент */}
    </Panel>                                        
    );
}

export default App;
