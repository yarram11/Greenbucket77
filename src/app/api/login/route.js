import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export async function POST(req) {
  const { username, password } = await req.json();

  try {
    await connect();

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid username or password." },
        { status: 401 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid username or password." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Login successful!", user: { id: user.id, email: user.email } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error logging in." },
      { status: 500 }
    );
  }
}
