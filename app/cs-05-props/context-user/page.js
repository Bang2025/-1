// 伺服器端導向
import { redirect } from 'next/navigation'

export default function ContextUserPage(props) {
  // 導向到會員登入頁面 cs-05-props/context-user/login
  redirect('/cs-05-props/context-user/login')

  return null
}
