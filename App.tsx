import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Game from "./src/components/Game";

const App = () =>
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Game />
  </GestureHandlerRootView>;

export default App;