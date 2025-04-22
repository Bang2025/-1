// export default function handler(req, res) {
//     res.status(200).json({ message: 'Hello from Node.js in Next.js!' });
// }


export async function GET(request) {
    return Response.json({ message: 'Hello from App Router!' });
}