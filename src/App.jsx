import { Provider } from "react-redux";
import store from "./components/store/configStore";
import SideBar from "./components/SideBar";
import RightMainWindow from "./components/RightMainWindow";

function App() {
  return (
    <Provider store={store}>
    <div className="flex h-screen"> 
      <SideBar />
      <RightMainWindow/>
      </div>
      </Provider>
  );
}

export default App;
