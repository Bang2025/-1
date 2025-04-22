'use client'

import { useState } from 'react'
// 範例資料(導入時會自動轉為js的資料格式)
import data from '../../_data/books.json'
// 導入Item元件
import Item from './item'

export default function List() {
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
              <Item
                key={book.isbn}
                book={book}
                toggleBookmark={toggleBookmark}
                bookmarks={bookmarks}
              />
            )
          })}
        </tbody>
      </table>
    </>
  )
}
