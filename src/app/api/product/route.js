import Product from "@/models/Product";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error in connect db" }, { status: 500 });
  }

  const products = await Product.find();

  if (!products) {
    return NextResponse.json({ message: "no products found" }, { status: 400 });
  }

  return NextResponse.json(
    {
      data: products,
    },
    { status: 200 }
  );
}

export async function POST(request) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error in connect db" }, { status: 500 });
  }

  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  } = await request.json();

  const product = await Product.create({
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  });
  console.log(product);
  return NextResponse.json(
    { message: "new product added to db" },
    { status: 201 }
  );
}
