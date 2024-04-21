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

  const { name, price, url1, url2, url3, url4, category, stock } =
    await request.json();
  if (!name)
    return NextResponse.json(
      { error: "please enter the name" },
      { status: 400 }
    );

  if (!price)
    return NextResponse.json(
      { error: "please enter the price" },
      { status: 400 }
    );

  if (!url1)
    return NextResponse.json(
      { error: "please enter the first image url" },
      { status: 400 }
    );

  if (!category)
    return NextResponse.json(
      { error: "please enter the category" },
      { status: 400 }
    );

  if (!stock)
    return NextResponse.json(
      { error: "please enter the stock" },
      { status: 400 }
    );

  try {
    const product = await Product.create({
      name,
      price,
      url1,
      url2,
      url3,
      url4,
      category,
      stock,
    });
    console.log(product);
    return NextResponse.json(
      { message: "new product added to db" },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: "failed",
      message: "Error in storing data in DB",
    });
  }
}

