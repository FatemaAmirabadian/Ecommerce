import Product from "@/models/Product";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function PATCH(request, context) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error in connect db" }, { status: 500 });
  }
  const id = context.params.productId;
  const data = await Product.findOne({ _id: id });
  const res = JSON.stringify(data);
  const product = JSON.parse(res);

  const newProduct = await request.json();

  try {
  await Product.replaceOne(product, newProduct);

    return NextResponse.json(
      { message: "products data changed" },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: "failed",
      message: "Error in storing data in DB",
    });
  }
}
