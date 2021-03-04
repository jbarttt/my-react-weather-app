import './App.css';
import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
    <Header />
    <Search />
    <Weather />
    <Forecast />
    <Footer />
    </div>
  );
}

export default App;
