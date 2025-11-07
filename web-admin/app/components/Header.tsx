"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 border-b">
      <Link href="/" className="font-bold text-lg">Admin.Web</Link>
      <nav className="flex gap-4 items-center">
        <Link href="/posts">게시글</Link>
        <Link href="/posts/new">새 글</Link>
        {session?.user ? (
          <>
            <span className="text-sm text-gray-600">{session.user.email}</span>
            <button onClick={() => signOut()} className="text-blue-600 underline">로그아웃</button>
          </>
        ) : (
          <Link href="/login" className="text-blue-600 underline">로그인</Link>
        )}
      </nav>
    </header>
  );
}
