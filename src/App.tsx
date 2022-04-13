import React from "react";
import Home from "./home"
import { GlobalContextProvider } from "./context";

function App() {
  return (
    <>
    <GlobalContextProvider>
      <Home />
    </GlobalContextProvider>
    </>
  );
}

export default App;
