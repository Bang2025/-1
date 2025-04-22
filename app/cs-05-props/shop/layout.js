// 此layout是這個SHOP的layout，是屬於伺服器元件 (因為排版等等的多半是屬於靜態頁面區塊)
// 伺服器元件裡面的子組件可以放客戶端元件

import Menubar from './_components/menubar'

export default function ShopLayout({ children }) {
  return (
    <>
      <Menubar />
      {children}
    </>
  )
}
