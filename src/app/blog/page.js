import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata = {
  title: "QR Code Blog – Tutorials & Tips",
  description: "Read tutorials and tips about QR codes, online generators, and digital marketing use cases.",
  alternates: { canonical: "https://yourdomain.com/blog" },
};

export default function BlogIndex() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">QR Code Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold text-blue-400 hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-400">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
