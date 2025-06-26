import React from "react";
import BookCard from "./BookCard";

const BookList = ({
  books,
  authors,
  images,
  dates,
  descriptions,
  ratings,
  Reads,
  Favorites,
}) => {
  return (
    <section className="bookList">
      {books.map((_, index) => (
        <BookCard
          key={index}
          books={[books[index]]} 
          authors={[authors[index]]}
          images={[images[index]]}
          dates={[dates[index]]}
          descriptions={[descriptions[index]]}
          ratings={[ratings[index]]}
          Reads={[Reads[index]]}
          Favorites={[Favorites[index]]}
        />
      ))}
    </section>
  );
};

export default BookList;
