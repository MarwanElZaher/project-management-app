import NewProject from "./components/NewProject";
import NoProjects from "./components/NoProjects";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen"> 
      <SideBar />
      <div className="flex-grow flex items-center justify-center p-4"> 
        {/* <NewProject /> */}
        <NoProjects/>
      </div>
    </div>
  );
}

export default App;
