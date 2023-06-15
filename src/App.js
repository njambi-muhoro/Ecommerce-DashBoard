import { Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import "./App.css";

function App() {
  const activeMenu = true;

  return (
    <div className="flex relative dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="Settings" position="top">
          <button
            type="button"
            className="text-3xl text-white "
            //  we used inline styling so that we can be able to choose from other colors dynamically
            style={{ background: "blue", borderRadius: "50%" }}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>

      {/* SideNav Bar */}
      {activeMenu ? (
        <div className="w-72 fixed shadow-lg dark:bg-secondary-dark-bg bg-white">
          SideBar
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg">SideBar</div>
      )}

      {/* Navigation Bar */}
      <div
        className={`${
          activeMenu
            ? "dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full"
            : "dark:bg-main-bg bg-main-bg min-h-screen flex-2 w-full"
        }`}
      >
        {/* navbar class is defined in app.css z-index: "10000" */}
        {/* .navbar class with a z-index value of 10000 indicates that 
        elements with this class will be positioned above most other elements 
        on the page. This high z-index value ensures that the navbar will be displayed 
        on top of other content, making it more visually prominent. */}
        <div className="fixed md:static dark:bg-main-dark-bg bg-main-bg w-full navbar">
          NavBar
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element="<Home/>" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
