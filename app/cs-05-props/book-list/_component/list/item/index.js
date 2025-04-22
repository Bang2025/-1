'use client'

// 導入icon元件
import Icon from './icon'

export default function Item({
  book = {},
  toggleBookmark = () => {},
  bookmarks = [],
}) {
  return (
    <>
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <Icon
            // book={book}
            isbn={book.isbn}
            toggleBookmark={toggleBookmark}
            bookmarks={bookmarks}
          />
        </td>
      </tr>
    </>
  )
}
