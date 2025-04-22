'use client'

import { useState } from 'react'
// next提供的自動圖片最佳化元件
import Image from 'next/image'

// 範例資料(導入時會自動轉為js的資料格式)
import data from './_data/books.json'

// 實心圖
import bookmarkIconFill from './_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from './_icons/bookmark.svg'

export default function BookListPage() {
  // 定義有被加入到書籤的記錄(記錄isbn)
  const [bookmarks, setBookmarks] = useState(['9781593279509', '9781593277574'])

  // 切換書籤圖示的函式
  const toggleBookmark = (bookIsbn) => {
    if (bookmarks.includes(bookIsbn)) {
      // 如果有在狀態陣列中 ===> 移出陣列
      const nextBookmarks = bookmarks.filter((v) => v !== bookIsbn)
      setBookmarks(nextBookmarks)
    } else {
      // 否則 ==> 加入到陣列
      const nextBookmarks = [...bookmarks, bookIsbn]
      setBookmarks(nextBookmarks)
    }
  }

  return (
    <>
      <h1>書籍清單</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>書名</th>
            <th>作者</th>
            <th>加入書籤</th>
          </tr>
        </thead>
        <tbody>
          {data.map((book) => {
            return (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Image
                    onClick={() => {
                      toggleBookmark(book.isbn)
                    }}
                    src={
                      bookmarks.includes(book.isbn)
                        ? bookmarkIconFill
                        : bookmarkIcon
                    }
                    alt=""
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
