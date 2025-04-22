'use client'

import { useEffect, useState } from 'react'

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([])
  console.log(recipes)

  useEffect(() => {
    fetch('/api/recipes')
      .then((res) => res.json()) //回傳promise物件，並且用json格式呈現
      .then((data) => {
        //這邊的data才是從資料庫查詢來的資料
        console.log(data) // 在這裡加入 log 來檢查 API 回傳資料
        setRecipes(data) //將查詢到的資料，改變上面的空陣列狀態(就是將資料塞進陣列當中)
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Recipes</h1>
      <ul className="space-y-2">
        {recipes.map((recipe) => (
          <li key={recipe.recipe_id} className="p-2 border rounded">
            <h2 className="text-lg">{recipe.title}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
