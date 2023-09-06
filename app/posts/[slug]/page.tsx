import { getPosts } from "@/api/posts";

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
