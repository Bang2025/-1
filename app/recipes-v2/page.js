'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([])

  const fetchData = async () => {
    const res = await fetch('/api/recipes')
    const data = await res.json()
    setRecipes(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    await fetch('/api/recipes', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchData()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🍽 食譜列表</h1>

      <Link href="/recipes/new">
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-4">
          ➕ 新增食譜
        </button>
      </Link>

      <ul className="space-y-2">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{recipe.title}</h2>
              <p className="text-sm text-gray-600">{recipe.description}</p>
            </div>
            <div className="space-x-2">
              <Link href={`/recipes/edit/${recipe.id}`}>
                <button className="text-blue-500 hover:underline">編輯</button>
              </Link>
              <button
                onClick={() => handleDelete(recipe.id)}
                className="text-red-500 hover:underline"
              >
                刪除
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
