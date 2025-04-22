'use client'

import { useState } from 'react'

export default function JsxCondRenderPage() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <h1>JSX條件式渲染</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
      <hr />
      {/* if表達式語法(&&運算子)，判斷的方式是使用falsy，會有不精確的情況-在0或NaN時一樣會被渲染呈現 */}
      {total && <p>1.目前的total是{total}</p>}
      {/* 強制轉換判斷條件為布林值，因為布林值不論false/true都不會被渲染呈現 */}
      {Boolean(total) && <p>2-1.目前的total是{total}</p>}
      {!!total && <p>2-2.目前的total是{total}</p>}
      {/* 改用比較運算子，必定會運算出布林值 */}
      {total > 0 && <p>3-1.目前的total是{total}</p>}
      {total !== 0 && <p>3-2.目前的total是{total}</p>}
      {/* 改用三元運算子(相當於if...else) */}
      {total ? <p>4.目前的total是{total}</p> : ''}
    </>
  )
}
