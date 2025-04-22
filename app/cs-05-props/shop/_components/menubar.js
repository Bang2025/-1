'use client'

import styles from './menubar.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// 導入useCart勾子
import { useCart } from '@/hooks/use-cart'

export default function Menubar() {
  // 取得目前路徑
  const pathname = usePathname()
  console.log('pathname', pathname)

  // 得到目前的totalQty
  const { totalQty } = useCart()

  return (
    <>
      <div className={styles.menu}>
        <ul>
          {/* 判斷是否要加上點亮active樣式 */}
          <li className={pathname.includes('/product') ? styles.active : ''}>
            <Link href="./product">商品頁</Link>
          </li>
          <li className={pathname.includes('/cart') ? styles.active : ''}>
            <Link href="./cart">購物車頁</Link>
          </li>
          <li style={{ color: 'white', padding: 10 }}>購買數量:{totalQty}</li>
        </ul>
      </div>
    </>
  )
}
