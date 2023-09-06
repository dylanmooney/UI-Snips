import { getPosts } from "@/api/posts";

// Rebuild the page every 1 hour.
export const revalidate = 3600;

// Static generation of each post page.
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({ slug: post.slug }));
}

type PostPageProps = {
  params: { slug: string };
};

export default async function PostPage({ params }: PostPageProps) {
  const posts = await getPosts();

  const post = posts.find((post) => post.slug === params.slug);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
