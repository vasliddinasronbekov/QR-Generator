import { posts } from "@/data/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
export async function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords.join(", "),
    alternates: { canonical: `https://yourdomain.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://yourdomain.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return <h1>404 – Post not found</h1>;

  return (
    <main className="prose prose-invert mx-auto px-4 py-10">
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}
