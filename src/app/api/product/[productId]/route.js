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
  const data = await Product.findOne({ _id: id });
  try {
    return NextResponse.json(
      { data },
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

// export default async function handler(req, res) {
//   const { productId } = req.query;
//   const productRes = await fetch(`http://localhost:3000/api/product/${productId}`);
//   const productData = await productRes.json();

//   res.status(200).json(productData);
// }