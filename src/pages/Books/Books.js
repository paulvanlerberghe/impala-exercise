import "./Books.css";
import BookList from "../../components/BookList/BookList";
import { useSelector } from "react-redux";

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="books">
      {books.length ? (
        <BookList books={books} />
      ) : (
        "Aucun(s) livre(s) trouvé(s)"
      )}
    </div>
  );
};

export default Books;
