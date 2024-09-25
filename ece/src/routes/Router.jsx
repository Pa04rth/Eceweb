import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { TransitionProvider } from "../context/TransitionContext";
import TransitionComponent from "../components/Transition";
import About from "../page/About";
import Home from "../page/Home";
import Submitpaper from "../page/Submitpaper";
import Contact from "../page/Contact";
import Committee from "../page/Committee";

const Router = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route
          path="/contact"
          element={
            <TransitionComponent>
              <Contact />
            </TransitionComponent>
          }
        />
        <Route
          path="/submitpaper"
          element={
            <TransitionComponent>
              <Submitpaper />
            </TransitionComponent>
          }
        />
        <Route
          path="/about"
          element={
            <TransitionComponent>
              <About />
            </TransitionComponent>
          }
        />
        <Route
          index
          element={
            <TransitionComponent>
              <Home />
            </TransitionComponent>
          }
        />
        <Route
          path="/committee"
          element={
            <TransitionComponent>
              <Committee />
            </TransitionComponent>
          }
        />
      </Routes>
    </TransitionProvider>
  );
};

export default Router;
