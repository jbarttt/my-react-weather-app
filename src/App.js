import './App.css';
import Header from "./Header";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
    <Header />
    <Weather defaultCity="New York" />
    <Forecast />
    <Footer />
    </div>
  );
}

export default App;
