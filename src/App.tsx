import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home"
import Details from "./components/details"
import { GlobalContextProvider } from "./context";

function App() {
  return (
    <>
    <GlobalContextProvider>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Router>
    </GlobalContextProvider>
    </>
  );
}

export default App;
