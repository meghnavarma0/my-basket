import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SearchBar from "./Components/SearchBar/SearchBar";
import MainContainer from "./Components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
