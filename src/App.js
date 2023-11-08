import { Outlet } from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
    <div className="relative">
      <div className="content-div mt-[65px] min-h-[calc(100vh-130px)]">
        <Outlet />        
        
      </div>
   
    </div>
    </>
  );
}

export default App;
