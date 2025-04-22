'use client'

import { useState, useEffect } from 'react'
// 導入.module.css檔案
import styles from './star-rating.module.css'

export default function StarRating({
  value = 0, //分數初始值
  max = 5, //最大評分
  onChange = () => {}, //設定評分時將狀態傳回父元件
  fillColor = 'gold', //星星顏色
  emptyColor = 'gray', //星星未點選時的顏色
  icon = <>&#9733;</>, //星星圖標
}) {
  // 記錄點按(click)事件的評分，初始值為0代表一開始沒有評分
  const [rating, setRating] = useState(value)
  // 記錄游標懸停(hover)事件的評分，初始值為0代表一開始沒有評分
  const [hoverRating, setHoverRating] = useState(0)

  // 狀態連鎖 。當value(從外部傳入屬性值的時候，對應的有可能是父元件的狀態)
  // value是狀態值，onChange是狀態更新
  // 更動時，此元件內部本地狀態的rating 也會跟著更動
  // 透過useEffect來達到
  useEffect(() => {
    setRating(value)
  }, [value])

  return (
    <>
      <h1>星星評分範例</h1>
      <hr />
      <div>
        {/* 如何建立一個陣列包含1...N數字 */}
        {/* https://github.com/orgs/mfee-react/discussions/50 */}
        {Array(max)
          .fill(1)
          .map((v, i) => {
            // 每個星星圖示的評分(索引+1)
            const score = i + 1

            return (
              <button
                onClick={() => {
                  // 點按時記錄評分
                  setRating(score)
                  // 將評分傳回父元件
                  onChange(score)
                }}
                onMouseEnter={() => {
                  // 記錄分數
                  setHoverRating(score)
                }}
                onMouseLeave={() => {
                  // 回復初始分數
                  setHoverRating(0)
                }}
                key={score}
                className={styles.starBtn}
              >
                <span
                  // 第一種方法。用style來設定顏色
                  // style={{
                  //   color:
                  //     score <= rating || score <= hoverRating
                  //       ? fillColor
                  //       : emptyColor,
                  // }}
                  // 第二種方式，用CSS module來帶入動態顏色
                  // 要搭配style屬性，將動態屬性值轉換成CSS變數
                  // 在CSS module檔案當中套用CSS變數
                  style={{
                    '--fillColor': fillColor,
                    '--emptyColor': emptyColor,
                  }}
                  // 如果此按鈕的分數 小於等於 目前評分狀態 或 懸停評分狀態, 則套用點亮樣式(on)
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                >
                  {icon}
                </span>
              </button>
            )
          })}
        <hr />
        <p>你選了{rating}分</p>
      </div>
    </>
  )
}
