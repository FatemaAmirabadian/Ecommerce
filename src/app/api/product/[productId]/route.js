import Product from "@/models/Product";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error in connect db" }, { status: 500 });
  }

  const id = context.params.productId;
  const data = await Product.findOne({ id });
  try {
    return NextResponse.json(
      { data },
      { 
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://e-commerce-eight-sand.vercel.app", // Allow requests only from this domain
          "Access-Control-Allow-Methods": "GET", // Allow only GET requests
        },
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: "failed",
      message: "Error in storing data in DB",
    });
  }
}
