import { Provider } from "react-redux";
import store from "./components/store/configStore";
import NewProject from "./components/NewProject";
import NoProjects from "./components/NoProjects";
import SideBar from "./components/SideBar";

function App() {
  return (
    <Provider store={store}>
    <div className="flex h-screen"> 
      <SideBar />
      <div className="flex-grow flex items-center justify-center p-4"> 
        <NewProject />
        {/* <NoProjects/> */}
      </div>
      </div>
      </Provider>
  );
}

export default App;
