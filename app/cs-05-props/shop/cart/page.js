'use client'

// 範例資料(也可以用json檔案導入)
// const items = [
//   {
//     id: 1,
//     name: '巧克力豆餅乾',
//     price: 100,
//     count: 3,
//   },
//   {
//     id: 2,
//     name: '小老板海苔',
//     price: 150,
//     count: 6,
//   },
// ]

import { useCart } from '@/hooks/use-cart'

// 跳出對話框
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function CartPage() {
  // 從useCart勾子解構出所需的函式OR值
  const { totalAmount, totalQty, onDecrease, onIncrease, onRemove, items } =
    useCart()

  // 跳出對話框

  //  跳出確認的對話框
  //   傳入的參數為要刪除的項目名稱(itemName) 與 項目ID(itemId)
  const confrimAndRemove = (itemName, itemId) => {
    const MySwal = withReactContent(Swal)

    MySwal.fire({
      title: `是否刪除${itemName}?`,
      text: '這個操作將無法復原!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: '取消!',
      confirmButtonText: '是的，我要進行刪除!',
    }).then((result) => {
      if (result.isConfirmed) {
        // 進行刪除的動作
        onRemove(itemId)
        // 呈現刪除成功的訊息
        MySwal.fire({
          title: 'Deleted!',
          text: `${itemName}已從購物車刪除`,
          icon: 'success',
        })
      }
    })
  }

  return (
    <>
      <h1>購物車</h1>
      <hr />
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
                  confrimAndRemove(item.name, item.id)
                  //   if (confirm('你確定要從購物車刪除此商品?')) {
                  //     onRemove(item.id)
                  //   }
                } else {
                  onDecrease(item.id)
                }
              }}
            >
              –
            </button>
            <button
              onClick={() => {
                // 刪除前最好要提示使用者
                confrimAndRemove(item.name, item.id)
                // 刪除前最好要提示使用者
                // if (confirm('你確定要從購物車刪除此商品?')) {
                //   onRemove(item.id)
                // }
              }}
            >
              刪除
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <div>
        {/* `toLocaleString()`是要加上千位符號 */}
        總數量:
        {totalQty}/ 總價:NT${totalAmount.toLocaleString()}
      </div>
    </>
  )
}
