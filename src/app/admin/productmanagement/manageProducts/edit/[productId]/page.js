import EditForm from "@/components/templates/EditForm";
import Product from "@/models/Product";
import connectDB from "@/utils/connectDB";

export default async function page(context) {
  const id = context.params.productId;
  await connectDB();
  const res = await Product.findOne({ _id: id });
  const data = JSON.stringify(res);
  const product = JSON.parse(data);

  return (
    <div className="form_container">
      <EditForm product={product} />
    </div>
  );
}
