import {Provider} from "react-redux";
import Addtodo from "./Components/Addtodo";
import { store } from "./ReduxToolKit/Store";

function App() {
  return (
   <Provider store={store}>
      <Addtodo/>
    </Provider>
  );
}
export default App;
