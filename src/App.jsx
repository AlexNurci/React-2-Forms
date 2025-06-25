import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [images, setImages] = useState([]);
  const appendBook = (newBook) => {
    console.log("newBook", newBook);
    setBooks([...books, newBook]);
  }
  const appendAuthor = (newAuthor) => {
    console.log("newAuthor", newAuthor);
    setAuthors([...authors, newAuthor]);
  }
  const appendImage = (newImage) => {
    console.log("newImage", newImage);
    setImages([...images, newImage]);
  }
  return (
    <div className="app">
      <h1 className="title">React Forms! 📝</h1>
      <AddBook appendBook={appendBook} appendAuthor={appendAuthor} appendImage={appendImage}/>
      {books.map((book) => (
        <li key={book}>{book}</li>
      ))}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
