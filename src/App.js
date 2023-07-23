import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="AppContainer">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer greeting={""} />
    </div>
  );
}

export default App;
