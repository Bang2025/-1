'use client'

import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    price: 50,
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    price: 100,
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    price: 150,
    count: 2,
  },
]

export default function ShoppingCartPage() {
  // 購物車中的項目
  // 購物車的初始值是空陣列，因為未加入商品時不會出現任何商品
  // 與商品的物件值會相差一個count屬性(數字類型，代表購買數量)
  const [items, setItems] = useState([])

  // 處理遞增數量
  const onIncrease = (itemId) => {
    const nextProducts = items.map((item) => {
      // 在成員(物件)中比對出id為itemId的成員
      if (item.id === itemId) {
        // 如果比對，拷貝物件+遞增count屬性值(item.count+1)
        return { ...item, count: item.count + 1 }
      } else {
        // 否則返回原物件
        return item
      }
    })

    //  設定到狀態
    setItems(nextProducts)
  }

  // 處理遞減數量
  const onDecrease = (itemId) => {
    const nextProducts = items.map((item) => {
      // 在成員(物件)中比對出id為itemId的成員
      if (item.id === itemId) {
        // 如果比對，拷貝物件+遞減count屬性值(item.count-1)
        return { ...item, count: item.count - 1 }
      } else {
        // 否則返回原物件
        return item
      }
    })

    //  設定到狀態
    setItems(nextProducts)
  }

  // 處理刪除
  const onRemove = (itemId) => {
    const nextProducts = items.filter((item) => {
      //過濾出id不是為itemId的資料
      return item.id != itemId
    })

    //  設定到狀態
    setItems(nextProducts)
  }

  // 處理新增
  // 與商品的物件值會相差一個count屬性(數字類型，代表購買數量)
  // 定義要新增的購物車項目
  const onAdd = (product) => {
    // 判斷商品是否已存在購物車當中，如果是的話啟用遞增
    const foundIndex = items.find((item) => item.id === product.id)

    if (foundIndex) {
      return onIncrease(product.id)
    }
    const newItem = { ...product, count: 1 }
    // 加到購物車項目前面
    setItems([newItem, ...items])
  }

  // 官網解答
  // function handleDecreaseClick(itemId) {
  //   // 數量count遞減(只能用let，因為有用重覆指定)
  //   let nextProducts = items.map((item) => {
  //     if (item.id === itemId) {
  //       return {
  //         ...item,
  //         count: item.count - 1,
  //       }
  //     } else {
  //       return item
  //     }
  //   })
  //   // 過濾出只保留數量大於0的商品物件
  //   nextProducts = nextProducts.filter((p) => p.count > 0)

  //   // 如果需要跳出確認的警告視窗
  //   // 需要一個方式判斷現在是要作刪除，還是遞減。遞減時前後狀態中的成員數量會一致
  //   if (nextProducts.length < items.length) {
  //     // 刪除前最好要提示使用者
  //     if (confirm('你確定要從購物車刪除此商品?')) {
  //       // 設定到狀態
  //       setItems(nextProducts)
  //     }
  //   } else {
  //     // 設定到狀態
  //     setItems(nextProducts)
  //   }
  // }

  // 使用for迴圈來計算加總
  // const calcTotalQty = () => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].count
  //   }
  //   return total
  // }

  // const calcTotalAmount = () => {
  //   let total = 0
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].count * items[i].price
  //   }
  //   return total
  // }

  // 使用陣列的迭代方法reduce來計算總數量/總價
  // 稱為衍生/派生狀態(derived state)，意即是狀態的一部份，或是由狀態計算得來的變數值
  const totalQty = items.reduce((acc, v) => acc + v.count, 0)
  const totalAmount = items.reduce((acc, v) => acc + v.count * v.price, 0)

  return (
    <>
      <div>
        <h2>商品列表</h2>
        <hr />
        <ul>
          {initialProducts.map((v) => {
            return (
              <li key={v.id}>
                {v.name} / NT${v.price}
                <button
                  onClick={() => {
                    onAdd(v)
                  }}
                >
                  加入購物車
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>購物車</h2>
        <hr />
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (<b>{item.count}</b>)(NT${item.price})
            <button
              onClick={() => {
                onIncrease(item.id)
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                // 判斷目前是否狀態的數量已經到1了，如果是，再按下後就需要刪除(數量count不可能有0或負數)
                if (item.count <= 1) {
                  // 刪除前最好要提示使用者
                  if (confirm('你確定要從購物車刪除此商品?')) {
                    onRemove(item.id)
                  }
                } else {
                  onDecrease(item.id)
                }
              }}
            >
              –
            </button>
            {/* <button
              onClick={() => {
                handleDecreaseClick(item.id)
              }}
            >
              -(官網)
            </button> */}
            <button
              onClick={() => {
                // 刪除前最好要提示使用者
                if (confirm('你確定要從購物車刪除此商品?')) {
                  onRemove(item.id)
                }
              }}
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        總數量: {totalQty}/ 總價:NT${totalAmount.toLocaleString()}
      </div>
    </>
  )
}
