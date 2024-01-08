import "./App.css";
import Banner from "./components/Banner/Banner";
import Featuer from "./components/Featuers/Featuer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="w-full h-auto">
      <div className="max-w-screen-2xl   text-myWhite ">
        <div className="bg-myBlue px-10">
          <Navbar />
        </div>

        <div className="text-myBlue">
          <Banner />

          <Featuer />
        </div>
      </div>
    </div>
  );
}

export default App;
