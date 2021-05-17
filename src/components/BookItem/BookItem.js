import { Link } from "react-router-dom";
import "./BookItem.css";

const BookItem = ({ bookId, title, author, cover, completed }) => {
  return (
    <li className="book-item">
      <Link to={`/books/${bookId}`}>
        <div>
          <div className="cover">
            <img src={cover} alt={title} />
          </div>
          <div className="text">
            <div>
              <h1>{title}</h1>
              <span>Auteur : {author}</span>
            </div>
            <span className={`status ${completed ? "completed" : ""}`}>{completed ? "Livre lu !" : "A lire !"}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default BookItem;
