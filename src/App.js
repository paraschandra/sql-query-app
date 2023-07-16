import { useState } from "react";
import { Header } from "./components/Header";
import { MainPage } from "./components/Main/MainPage";

function App() {
  const [toggle, setToggle] = useState("closed");

  return (
    <div className="flex flex-col h-full w-full absolute">
      <Header toggle = {toggle} setToggle = {setToggle}/>
      <MainPage toggle = {toggle} setToggle = {setToggle}/>
    </div>
  );
}

export default App;
