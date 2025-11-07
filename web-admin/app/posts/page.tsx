import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function PostsPage() {
  const posts = await prisma.post.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">게시글 목록</h1>
      {posts.map((p) => (
        <div key={p.id} className="border p-4 rounded">
          <h2 className="font-semibold">{p.title}</h2>
          <p>{p.content}</p>
          <p className="text-sm text-gray-500">작성자: {p.author?.email}</p>
        </div>
      ))}
    </div>
  );
}
