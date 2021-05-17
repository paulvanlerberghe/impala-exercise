import './BookList.css'
import BookItem from '../BookItem/BookItem';

function BookList({ showCount, books }) {
  return (
    <div className="book-list">
      {showCount && <p>{`${books.length} livre(s) trouvé(s)`}</p>}
      <ul>
        {
          books.map((book, index) => {
            return (<BookItem
              key={index}
              bookId={book.id}
              title={book.title}
              author={book.author}
              cover={book.cover}
              completed={book.completed}
            />)
          })
        }
      </ul>
    </div>
  )
}

export default BookList