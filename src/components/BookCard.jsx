import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const BookCard = ( {books, authors, images, dates, descriptions, ratings, Reads, Favorites} ) => {
  return (
    <h2 className="bookCard">
      <div className="bookCardContent">
        {books.map((book, index) => (
        <div key={index}>{book}</div>
      ))}
      {authors.map((author) => (
        <div key={author}>{author}</div>
      ))}
      {images.map((image) => (
        <img src="image"/>
      ))}
      {dates.map((date) => (
        <div key={date}>{date.replace("T", " ")}</div>
      ))}
      {descriptions.map((description) => (
        <div key={description}>Description: {description}</div>
      ))}
      {ratings.map((rating) => (
        <div key={rating}>Rating: {rating} /5</div>
      ))}
      {Reads.map((isRead) => (
        <div key={isRead}>{isRead ? "Read" : "Not read"}</div>
      ))}
      {Favorites.map((isFavorite) => (
        <div key={isFavorite}>{isFavorite ? "Favorite" : "Not favorite"}</div>
      ))}
      </div>
    </h2>
  );
};

export default BookCard;
