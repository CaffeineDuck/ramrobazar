import * as React from "react";

import NavBar from "./components/navbar";
import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes />
    </>
  );
};

export default App;
