import "./App.css";
import React from "react";
import App from "./components/Button";
import BtnNS from "./components/ButtonNameSurname";
import HumMenu from "./components/HumburgerMenu";
import SignIn from "./components/SignIn";

const MainApp: React.FC = () => {
  return (
    <div>
      <App />
      <BtnNS />
      <SignIn />
      <HumMenu />
    </div>
  );
};

export default MainApp;
