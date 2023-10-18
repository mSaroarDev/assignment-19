import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const userData = await req.json();

  try {
    const newUser = await prisma.user.create({
      firstName: userData.firstName,
      lastName: userData.lastName,
      middleName: userData.middleName,
      mobile: userData.mobile,
      email: userData.email,
      password: userData.password,
      admin: userData.admin,
    });

    return NextResponse.json({ msg: "success", data: newUser });
  } catch (err) {
    return NextResponse.json({ msg: "failed", data: err });
  }
}
