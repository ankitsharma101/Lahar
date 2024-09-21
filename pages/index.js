import { AppRegistry } from "react-native";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

AppRegistry.registerComponent("YourAppName", () => () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
));
