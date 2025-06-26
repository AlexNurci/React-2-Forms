import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import AddBook from "./components/AddBook";
import BookCard from "./components/BookCard";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [images, setImages] = useState([]);
  const [dates, setDates] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [Reads, setReads] = useState([]);
  const [Favorites, setFavorites] = useState([]);
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
  const appendDate = (newDate) => {
    console.log("newDate", newDate);
    setDates([...dates, newDate]);
  }
  const appendDescription = (newDescription) => {
    console.log("newDescription", newDescription);
    setDescriptions([...descriptions, newDescription]);
  }
  const appendRating = (newRating) => {
    console.log("newRating", newRating);
    setRatings([...ratings, newRating]);
  }
  const appendRead = (newRead) => {
    console.log("newRead", newRead);
    setReads([...Reads, newRead]);
  }
  const appendFavorite = (newFavorite) => {
    console.log("NewFavorite", newFavorite);
    setFavorites([...Favorites, newFavorite]);
  }

  const bookCard = useState({
    Title: books,
    Author: authors,
    Image: images,
    Date: dates,
    Description: descriptions,
    Rating: ratings,
    isRead: Reads,
    isFavorite: Favorites,
  });

  return (
    <div className="app">
      <h1 className="title">React Forms!</h1>
      <AddBook 
      appendBook={appendBook} 
      appendAuthor={appendAuthor} 
      appendImage={appendImage} 
      appendDate={appendDate} 
      appendDescription={appendDescription}
      appendRating={appendRating}
      appendRead={appendRead}
      appendFavorite={appendFavorite}
      />
      <BookList 
      books={books}
      authors={authors}
      images={images}
      dates={dates}
      descriptions={descriptions}
      ratings={ratings}
      Reads={Reads}
      Favorites={Favorites}
      />
      {/* {books.map((book) => (
        <li key={book}>{book}</li>
      ))} */}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
