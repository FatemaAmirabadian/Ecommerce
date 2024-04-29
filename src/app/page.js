import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto mt-4">
      <Link href="/admin/productmanagement">
        <span className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md mb-4">
          Product Management
        </span>
      </Link>
      <Link href="/admin/usermanagement">
        <span className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md">
          User Management
        </span>
      </Link>
    </div>
  );
}
