import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r p-6">
      <h1 className="text-xl font-bold mb-8">VC Intelligence</h1>

      <nav className="space-y-4">
        <Link href="/companies" className="block text-gray-700 hover:text-black">
          Companies
        </Link>
        <Link href="/lists" className="block text-gray-700 hover:text-black">
          Lists
        </Link>
        <Link href="/saved" className="block text-gray-700 hover:text-black">
          Saved Searches
        </Link>
      </nav>
    </aside>
  );
}