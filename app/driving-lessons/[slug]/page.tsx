import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LessonLanding } from "@/components/LessonLanding";
import { getLessonPage, lessonPages } from "@/lib/lesson-pages";
import { SITE_URL } from "@/lib/site";

type LessonSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lessonPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: LessonSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLessonPage(slug);

  if (!page) {
    return { title: "Driving lessons" };
  }

  return {
    title: { absolute: page.title },
    description: page.description,
    keywords: [page.keyword],
    alternates: {
      canonical: `${SITE_URL}/driving-lessons/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default async function LessonSlugPage({ params }: LessonSlugPageProps) {
  const { slug } = await params;
  const page = getLessonPage(slug);

  if (!page) {
    notFound();
  }

  return <LessonLanding page={page} />;
}
