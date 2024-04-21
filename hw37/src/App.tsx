import "./App.css";
import React from "react";
import App from "./ui-components/Button";
import BtnNS from "./ui-components/ButtonNameSurname";
import HumMenu from "./components/BurgerMenu";
import SignIn from "./ui-components/SignIn";
import Input from "./ui-components/Input";
import Textarea from "./ui-components/Textarea";
import Tabs from "./components/Tabs";

const MainApp: React.FC = () => {
  return (
    <div>
      <App />
      <BtnNS />
      <SignIn />
      <HumMenu />
      <Input />
      <Textarea />
      <Tabs />
    </div>
  );
};

export default MainApp;
