import pool from '@/lib/db'

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT NOW() AS time')
    return Response.json({ success: true, dbTime: rows[0].time })
  } catch (error) {
    console.error('DB Connection Error:', error)
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}
