import ReactDOM from "react-dom/client";
import App from "./App";
import PageProvider from "./app/providers/PageProvider";
import GoldProvider from "./app/providers/GoldProvider";
import MoneyProvider from "./app/providers/MoneyProvider";
import PickaxeProvider from "./app/providers/PickaxeProvider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <PageProvider>
        <GoldProvider>
            <MoneyProvider>
              <PickaxeProvider>
                <App />
              </PickaxeProvider>
            </MoneyProvider>
        </GoldProvider>
    </PageProvider>,
);