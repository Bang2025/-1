'use client'

import { useCart } from '@/hooks/use-cart'

// 訊息對話
import { ToastContainer, toast } from 'react-toastify'

// 範例資料(也可以用json檔案導入)
const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 100,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 150,
  },
]

export default function ProductPage() {
  // 從useCart勾子解構出所需的函式OR值
  const { onAdd } = useCart()

  return (
    <>
      <h1>商品列表</h1>
      <hr />
      <ul>
        {initialProducts.map((product) => {
          return (
            <li key={product.id}>
              {/* `toLocaleString()`是要加上千位符號 */}
              {product.name} ( NT${product.price.toLocaleString()} )
              <button
                onClick={() => {
                  // 加入購物車
                  onAdd(product)
                  //   跳出成功訊息
                  toast.success(`${product.name} 加入購物車`)
                }}
              >
                加入購物車
              </button>
            </li>
          )
        })}
      </ul>
      {/* 吐司訊息要使用的元件，需要放在跳出的頁面當中 */}
      <ToastContainer />
    </>
  )
}
