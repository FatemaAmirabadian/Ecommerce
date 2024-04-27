import Link from "next/link";

export default function Home() {
  return (
    <div className="form_container">
      <Link href={"/admin/productmanagement"}><div className="form_title">product management</div></Link>
      <Link href={"/admin/usermanagement"}><div className="form_title">user management</div></Link>
    </div>
  );
}
