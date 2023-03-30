import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

import fantasy from "./books/fantasy.json";
import history from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

const allBooks = [...fantasy, ...history, ...horror, ...romance, ...scifi];
const shuffledBooks = allBooks.sort((a, b) => 0.5 - Math.random()).splice(0, 24);

function App() {
  return (
    <div className="App" style={{ background: "#efe9f4" }}>
      <header className="App-header">
        <MyNav />
      </header>
      <Welcome />
      <BookList books={shuffledBooks} />
      <MyFooter />
    </div>
  );
}

export default App;
