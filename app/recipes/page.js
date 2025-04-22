'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([])
  const router = useRouter()

  useEffect(() => {
    fetch('http://localhost:3001/recipes/api')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRecipes(data.rows)
        }
      })
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">食譜列表</h2>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded mb-4"
        onClick={() => router.push('/recipes/add')}
      >
        ➕ 新增食譜
      </button>

      <ul className="space-y-2">
        {recipes.map((r) => (
          <li key={r.id} className="border-b py-2">
            <strong>{r.title}</strong>
            <div>{r.description || '（沒有內容）'}</div>
            <pre className="text-xs bg-gray-100 p-2 mt-1 rounded">
              {JSON.stringify(r, null, 2)}
            </pre>
          </li>
        ))}
      </ul>
    </div>
  )
}
