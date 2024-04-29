import Product from "@/models/Product";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function OPTIONS() {
  // Set CORS headers for OPTIONS requests
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin":
          "https://e-commerce-eight-sand.vercel.app", // Allow requests only from this domain
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Specify allowed methods
        "Access-Control-Allow-Headers": "Content-Type, Authorization", // Specify allowed headers
      },
    }
  );
}


export async function GET(request, context) {
  try {
    await connectDB();

    // Extract the product ID from the request parameters
    const { productId } = context.params;

    // Find the product in the database using the product ID
    const product = await Product.findOne({ id: productId });

    
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    
    return NextResponse.json(
      { data: product },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "https://e-commerce-eight-sand.vercel.app",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}