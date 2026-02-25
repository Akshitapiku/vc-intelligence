
import Link from "next/link";
const companies = [
  {
    id: "1",
    name: "Stripe",
    website: "https://stripe.com",
    industry: "Fintech",
    location: "USA",
  },
  {
    id: "2",
    name: "Notion",
    website: "https://notion.so",
    industry: "Productivity",
    location: "USA",
  },
];

export default function CompaniesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Companies</h1>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full text-left border-collapse">
          <thead className="border-b">
            <tr className="text-sm text-gray-600">
              <th className="p-4">Name</th>
              <th className="p-4">Industry</th>
              <th className="p-4">Location</th>
              <th className="p-4">Website</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">
  <Link href={`/companies/${c.id}`} className="hover:underline">
    {c.name}
  </Link>
</td>
                <td className="p-4">{c.industry}</td>
                <td className="p-4">{c.location}</td>
                <td className="p-4">
                  <a
                    href={c.website}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Visit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}