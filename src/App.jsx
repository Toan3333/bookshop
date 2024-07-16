import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Main from "./layout/Main";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/about-us" element={<About></About>}></Route>
          <Route path="/contact-us" element={<Contact></Contact>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
