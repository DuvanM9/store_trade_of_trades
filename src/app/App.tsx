import { NavigationApp } from "./routes/NavigationApp";
import { NavigationRegister } from "./routes/NavigationRegister";

function App() {
  return false ? <NavigationApp /> : <NavigationRegister />;
}

export default App;
