'use client'

// next提供的自動圖片最佳化元件
import Image from 'next/image'
// 實心圖
import bookmarkIconFill from '../../../_icons/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '../../../_icons/bookmark.svg'

// 補充
// 1.最小權限原則
// 2.方便做效能最佳化與除錯

export default function Icon({
  book = {},
  isbn = '',
  toggleBookmark = () => {},
  bookmarks = [],
}) {
  return (
    <>
      <Image
        onClick={() => {
          toggleBookmark(isbn)
        }}
        src={bookmarks.includes(isbn) ? bookmarkIconFill : bookmarkIcon}
        alt=""
      />
    </>
  )
}
