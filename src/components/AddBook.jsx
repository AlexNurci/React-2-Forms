import React, { useState } from "react";
import { FaStar } from "react-icons/fa";  
import "./style.css";

/**
 * A book should have the following fields:
 * - title (required)
 * - author (required)
 * - image (optional, url)
 * - publishedDate (optional, datetime)
 * - description (optional, text)
 * - rating (number, 1-5)
 * - category (optional, dropdown with options: fiction, non-fiction, poetry, drama, biography, history, science, technology, art, music, travel, cooking, gardening, etc.)
 * - isRead (boolean, default false)
 * - isFavorite (boolean, default false)
 */

const AddBook = ({ appendBook, appendAuthor, appendImage, appendDate, appendDescription, appendRating, appendRead, appendFavorite}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [Read, setRead] = useState(false);
  const [Favorite, setFavorite] = useState(false);
  const [titleErrors, setTitleErrors] = useState([]);
  const [dirty, setDirty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    appendBook(title);
    appendAuthor(author);
    appendImage(image);
    appendDate(date);
    appendDescription(description);
    appendRating(rating);
    appendRead(Read);
    appendFavorite(Favorite);
    clearForm();
  };

  const handleTitleChange = (event) => {
    setDirty(true);
    setTitle(event.target.value);
    if (title.length < 5) {
      setTitleErrors(["title must have at least 5 characters"]);
    } else {
      setTitleErrors([]);
    }
  };

  const handleAuthorChange = (event) => {
    setDirty(true);
    setAuthor(event.target.value);
  };

  const handleImageChange = (event) => {
    setDirty(true);
    setImage(event.target.value);
  }
  const handleDateChange = (event) => {
    setDirty(true);
    setDate(event.target.value);
  }
   const handleDescriptionChange = (event) => {
    setDirty(true);
    setDescription(event.target.value);
  }
  const handleRatingChange = (event) => {
    setDirty(true);
    setRating(event.target.value);
  }
  const handleReadChange = (event) => {
    setDirty(true);
    setRead(event.target.value);
  }
  const handleFavoriteChange = (event) => {
    setDirty(true);
    setFavorite(event.target.value);
  }

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setImage("");
    setDate("");
    setDescription("");
    setRating("");
    setRead("");
    setFavorite("");
  };

  return (
    <form onSubmit={handleSubmit} className="newBook">
      <input
        name="title"
        type="text"
        required
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        name="author"
        type="text"
        required
        placeholder="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <input
        name="image"
        type="file"
        required
        placeholder="Image"
        value={image}
        onChange={handleImageChange}
      />
      <input
        name="date"
        type="datetime-local"
        required
        placeholder="Date"
        value={date}
        onChange={handleDateChange}
      />
       <input
        name="description"
        type="text"
        required
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return(
          <label>
            <input
              name="rating"
              type="radio"
              required
              value={currentRating}
              onClick={() => setRating(currentRating)}
              onChnage={handleRatingChange}
            />
            <FaStar 
              className='star' 
              size={15} 
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        )
      })}
      <label>
        Have you read it?
        <input
        name="Read"
        type="checkbox"
        placeholder="isRead"
        checked={Read}
        onChange={handleReadChange}
        />
      </label>
      <label>
        Is it your favorite?
        <input
        name="Favorite"
        type="checkbox"
        placeholder="isFavorite"
        checked={Favorite}
        onChange={handleFavoriteChange}
        />
      </label>
      {titleErrors.map((error) => (
        <p className="error" key={error}>
          {error}
        </p>
      ))}
      <button disabled={titleErrors.length > 0 || !dirty}>Create Book</button>
    </form>
  );
};

export default AddBook;