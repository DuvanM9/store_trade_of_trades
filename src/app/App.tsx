import { NavigationApp } from "./routes/NavigationApp";
import { NavigationRegister } from "./routes/NavigationRegister";

function App() {
  return true ? <NavigationApp /> : <NavigationRegister />;
}

export default App;
