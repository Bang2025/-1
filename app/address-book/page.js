'use client'
import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

const AddressBookList = () => {
  const [data, setData] = useState(null)
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = parseInt(searchParams.get('page') || '1', 10)

  useEffect(() => {
    fetch(`http://localhost:3001/address-book/api?page=${page}`) // 確認實際 API 路徑
      .then((res) => res.json())
      .then((result) => {
        setData(result)
      })
      .catch((err) => {
        console.error('Fetch failed:', err)
      })
  }, [page])

  const goToPage = (p) => {
    router.push(`/address-book?page=${p}`)
  }

  if (!data) return <p>Loading...</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">通訊錄列表</h2>

      <ul className="space-y-2">
        {data.rows.map((item) => (
          <li key={item.ab_id} className="border-b py-2">
            <strong>{item.name}</strong> - {item.email}
          </li>
        ))}
      </ul>
      {/* 分頁按鈕 */}
      <div className="mt-4 flex gap-2">
        {Array.from({ length: data.totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => goToPage(p)}
            className={`px-3 py-1 border rounded ${
              p === page ? 'bg-blue-600 text-white' : 'bg-gray-100'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AddressBookList
