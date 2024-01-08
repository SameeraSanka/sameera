import "./App.css";
import Projects from "./components/Projects/Projects";
import Banner from "./components/Banner/Banner";
import Featuer from "./components/Featuers/Featuer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full h-auto text-lightText ">
      <Navbar />

      <div className="max-w-screen-2xl   text-myWhite ">
        <Banner />
        <Featuer />
        <Projects/>
      </div>
    </div>
  );
}

export default App;
