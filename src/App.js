import React,{Fragment} from 'react';
import './App.css';
import Routes from "./client/desktop/routes";
import NavBar from "./client/desktop/modules/layout/navBar/NavBar";

function App() {
  return (
    <Fragment>
      <Routes>
          <NavBar/>
      </Routes>
    </Fragment>
  );
}

export default App;
