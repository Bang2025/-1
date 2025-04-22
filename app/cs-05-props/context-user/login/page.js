'use client'

import React, { useState, useEffect } from 'react'
// 用Link元件取代a連結，防止狀態重置
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

export default function LoginPage(props) {
  const { isAuth, login, logout } = useAuth()
  return (
    <>
      <div>會員登入頁面</div>
      <Link href={'/cs-05-props/context-user/profile'}>個人資料</Link>
      <hr />
      <p>目前會員登入狀態:{isAuth ? '登入中...' : '未登入'}</p>
      <p>
        <button onClick={login} disabled={isAuth}>
          登入
        </button>
      </p>
      <p>
        <button onClick={logout} disabled={!isAuth}>
          登出
        </button>
      </p>
    </>
  )
}
