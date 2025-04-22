'use client'

// 可控表單元件
export default function LoginUC() {
  return (
    <>
      <h2>不可控表單元件</h2>
      <div>
        Email: <input type="text" id="email" />
      </div>
      <div>
        密碼: <input type="password" id="pass" />
      </div>
      <div>
        <button
          onClick={() => {
            const email = document.getElementById('email').value
            const pass = document.getElementById('pass').value
            console.log(email, pass)
            // 送到伺服器
          }}
        >
          登入
        </button>
      </div>
    </>
  )
}
