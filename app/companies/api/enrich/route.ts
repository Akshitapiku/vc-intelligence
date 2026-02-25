import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    summary: `${body.name} is a fast-growing company in the ${body.industry} space.`,
    bullets: [
      "Modern product-led company",
      "Strong focus on user experience",
      "Scalable business model",
    ],
    keywords: ["startup", body.industry, "technology", "SaaS"],
    signals: ["Has careers page", "Active blog", "Growing team"],
    scrapedAt: new Date().toISOString(),
  });
}