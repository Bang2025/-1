'use client'

// context套用第2步: 在任何"後代元件"深度，使用useContext(MyContext)讀取它
// React v19版本後加入`use`勾子，可以用來讀取Promise或context資源的值
// import { useContext, use } from 'react'
// import { AuthContext } from '@/context/auth'
// 用Link元件取代a連結，防止狀態重置
import Link from 'next/link'

// 改為專用的勾子名稱，解析context傳來的屬性值
import { useAuth } from '@/hooks/use-auth'

export default function ProfilePage() {
  //context套用第2步
  // use勾子在讀取context上與useContext在這裡是一樣的結果，但差異是在於use語法彈性更高，它可以在if條件式或for迴圈中使用，而useContext是不能這樣作
  // const { user } = use(AuthContext)
  const { isAuth, user } = useAuth()

  return (
    <>
      <h1>會員個人資料頁</h1>
      <Link href="/cs-05-props/context-user/login">登入頁面</Link>
      <hr />
      <p>目前會員登入狀態:{isAuth ? '登入中...' : '未登入'}</p>
      <p>會員id: {user?.id}</p>
      <p>帳號: {user?.username}</p>
      <p>姓名: {user?.name}</p>
      <p>電子郵件: {user?.email}</p>
    </>
  )
}
