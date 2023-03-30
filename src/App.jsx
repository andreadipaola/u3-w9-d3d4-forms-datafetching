import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App" style={{ background: "#efe9f4" }}>
      <header className="App-header">
        <MyNav />
      </header>
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
