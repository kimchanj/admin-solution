import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 이미 가입된 이메일 체크
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return new Response(JSON.stringify({ error: "이미 등록된 이메일입니다." }), { status: 400 });

    // 비밀번호 해시화
    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: { email, password: hashed, role: "user" },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "회원가입 실패" }), { status: 500 });
  }
}
