import { useSelector } from "react-redux";
import { NavigationApp } from "./routes/NavigationApp";
import { NavigationRegister } from "./routes/NavigationRegister";
import { IStore } from "./interface/store";

function App() {
  const { init, register } = useSelector((state: IStore) => state.app_router);

  const switchRouter = (): JSX.Element => {
    if (register) {
      return <NavigationRegister />;
    } else if (init) {
      return <NavigationApp />;
    } else {
      return <NavigationApp />;
    }
  };

  return switchRouter();
}

export default App;
