import pool from '@/lib/db'

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM recipes')
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (e) {
    return new Response(JSON.stringify(e.message))
  }
}

export async function POST(request) {
  try {
    const { title, description } = await request.json()
    await pool.query('INSERT INTO recipes (title, description) VALUES (?, ?)', [
      title,
      description,
    ])
    return Response.json({ message: '新增成功' })
  } catch (error) {
    console.error('新增錯誤:', error)
    return new Response('新增失敗', { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const { id, title, description } = await request.json()

     // 檢查 id 是否存在
     if (!id) {
      return new Response('ID 必須存在', { status: 400 })
    }

    console.log('收到的資料:', { id, title, description })

    const [result] = await pool.query(
      'UPDATE recipes SET title = ?, description = ? WHERE id = ?',
      [title, description, id]
    )
    if (result.affectedRows === 0) {
      throw new Error('未找到該食譜，更新失敗')
    }

    return new Response(JSON.stringify({ message: '更新成功' }), { status: 200 })
  } catch (error) {
    console.error('更新錯誤:', error.message)
    return new Response(JSON.stringify({ message: error.message }), { status: 500 })
  }
}

export async function DELETE(request) {
  const { id } = await request.json()
  await pool.query('DELETE FROM recipes WHERE id = ?', [id])
  return Response.json({ message: '刪除成功' })
}
