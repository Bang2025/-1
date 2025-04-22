'use client'

// 導入時就自動轉為JS資料格式
import products from './_data/Product.json'
//NEXT裡面的圖片專用元件
import Image from 'next/image'
// 引入CSS
// import './_styles/product-table.css'

// css module
import styles from './_styles/product-table.module.css'

export default function ProductTablePage() {
  // console.log(data)
  return (
    <>
      <table className={styles['my-table']}>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {/* 英文複數轉為單數 products --> product */}
          {products?.map((item, index) => {
            return (
              <tr key={item.sn}>
                <td>{item.sn}</td>
                <td>
                  <Image
                    width={150}
                    height={150}
                    src={`/images/${item.photo}`}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
