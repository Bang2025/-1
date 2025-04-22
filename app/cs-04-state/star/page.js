'use client'

import { useState } from 'react'
// 導入.module.css檔案
import styles from './_styles/star.module.css'

export default function StarPage() {
  // 記錄點按(click)事件的評分，初始值為0代表一開始沒有評分
  const [rating, setRating] = useState(0)
  // 記錄游標懸停(hover)事件的評分，初始值為0代表一開始沒有評分
  const [hoverRating, setHoverRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <hr />
      <div>
        {/* 如何建立一個陣列包含1...N數字 */}
        {/* https://github.com/orgs/mfee-react/discussions/50 */}
        {Array(5)
          .fill(1)
          .map((v, i) => {
            // 每個星星圖示的評分(索引+1)
            const score = i + 1

            return (
              <button
                onClick={() => {
                  // 點按時記錄評分
                  setRating(score)
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
                  // 如果此按鈕的分數 小於等於 目前評分狀態 或 懸停評分狀態, 則套用點亮樣式(on)
                  className={
                    score <= rating || score <= hoverRating
                      ? styles.on
                      : styles.off
                  }
                >
                  &#9733;
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
