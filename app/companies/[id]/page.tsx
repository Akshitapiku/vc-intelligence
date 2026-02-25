"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";

type Company = {
  id: string;
  name: string;
  website: string;
  industry: string;
  location: string;
};

type EnrichmentData = {
  summary: string;
  bullets: string[];
};

const companies: Company[] = [
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

export default function CompanyProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const company = companies.find((c) => c.id === id);

  const [data, setData] = useState<EnrichmentData | null>(null);
  const [loading, setLoading] = useState(false);

  if (!company) return notFound();

  async function enrichCompany() {
    setLoading(true);

    const res = await fetch("/api/enrich", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(company),
    });

    const result: EnrichmentData = await res.json();
    setData(result);
    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{company.name}</h1>

      <div className="bg-white p-6 rounded-lg shadow space-y-2">
        <p>
          <strong>Industry:</strong> {company.industry}
        </p>
        <p>
          <strong>Location:</strong> {company.location}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={company.website}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            {company.website}
          </a>
        </p>

        <button
          onClick={enrichCompany}
          className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          {loading ? "Enriching..." : "Enrich Company"}
        </button>

        {data && (
          <div className="mt-6 bg-gray-50 p-4 rounded">
            <h2 className="font-semibold mb-2">Enrichment</h2>
            <p className="mb-2">{data.summary}</p>

            <ul className="list-disc pl-6">
              {data.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}