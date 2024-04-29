import Product from "@/models/Product";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function DELETE(req, context) {
  try {
    await connectDB();

    const id = context.params.productId;

    await Product.deleteOne({ _id: id });

    return NextResponse.json(
      { message: "آگهی موردنظر حذف شد" },
      { 
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://e-commerce-eight-sand.vercel.app", // Allow requests only from this domain
          "Access-Control-Allow-Methods": "DELETE", // Allow only DELETE requests
        },
      }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
