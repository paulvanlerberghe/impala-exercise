import "./Book.css";
import BookList from "../../components/BookList/BookList";

import { useSelector, useDispatch } from "react-redux";
import DoneButton from "../../components/DoneButton/DoneButton";
import { toggleCompletionBook } from "../../app/actions/booksActions";

const Book = ({ match }) => {
  const { bookId } = match.params;

  const book = useSelector((state) => {
    return state.books.find((book) => book.id === bookId);
  });

  const books = useSelector((state) => {
    return state.books.filter(
      (b) => b.author === book.author && b.id !== book.id
    );
  });

  const dispatch = useDispatch()

  if (!book) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <div className="book">
      <div className="layout">
        <div className="cover">
          <img src={book.cover} alt={book.title} />
        </div>
        <div className="text">
          <h1>{book.title}</h1>
          <p>Auteur(e) : {book.author}</p>
          <p>ISBN : {book.isbn}</p>
          <DoneButton label={"Livre fini"} completed={book.completed} onToggle={() => dispatch(toggleCompletionBook(book))} />
        </div>
      </div>

      {!!books.length && (
        <>
          <h2>Autres livres par le/la même auteur(e) :</h2>
          <BookList books={books} />
        </>
      )}
    </div>
  );
};

export default Book;
