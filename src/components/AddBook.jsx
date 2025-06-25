import React, { useState } from "react";
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

const AddBook = ({ appendBook, appendAuthor, appendImage }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [titleErrors, setTitleErrors] = useState([]);
  const [dirty, setDirty] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("title", title);
    appendBook(title);
    appendAuthor(author);
    appendImage(image);
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

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setImage("");
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