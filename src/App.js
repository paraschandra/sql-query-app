import { Header } from "./components/Header";
import { MainPage } from "./components/Main/MainPage";

function App() {
  return (
    <div className="flex flex-col h-full w-full absolute">
      <Header/>
      <MainPage/>
    </div>
  );
}

export default App;
