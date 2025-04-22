'use client'

import { useState } from 'react'
import { produce } from 'immer'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ImmerCartPage() {
  const [products, setProducts] = useState(initialProducts)

  return (
    <>
      <h1>Immer購物車範例</h1>
      <hr />
      <ul>
        {products.map((product, i) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                const nextProducts = produce(products, (draft) => {
                  // 直接修改所需的屬性值(實際上是在代理的草稿狀態上更動)
                  draft[i].count++
                })

                setProducts(nextProducts)
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                const nextProducts = produce(products, (draft) => {
                  // 直接修改所需的屬性值(實際上是在代理的草稿狀態上更動)
                  draft[i].count--
                })

                setProducts(nextProducts)
              }}
            >
              –
            </button>
            <button
              onClick={() => {
                const nextProducts = produce(products, (draft) => {
                  // 直接修改所需的屬性值(實際上是在代理的草稿狀態上更動)
                  draft.splice(i, 1)
                })

                setProducts(nextProducts)
              }}
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
