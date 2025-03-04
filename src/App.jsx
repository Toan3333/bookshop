import React, { Fragment } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Main from "./layout/Main";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
