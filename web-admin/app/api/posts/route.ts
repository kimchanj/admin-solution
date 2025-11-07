import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();

    // 👇 세션 대신 테스트용 유저 ID를 직접 지정
    const user = await prisma.user.findFirst();
    if (!user) {
      return NextResponse.json(
        { message: "User not found. Add a user first." },
        { status: 404 }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: user.id,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

/*
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { title, content } = await req.json();
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: user.id,
    },
  });

  return NextResponse.json(post);
}
*/