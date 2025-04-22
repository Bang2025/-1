'use client'

// children是props(屬性)中內建的屬性值
export default function Parent({ children }) {
  return (
    <>
      <h2>Parent</h2>
      <div style={{ color: 'red', fontSize: 20 }}>{children}</div>
    </>
  )
}
