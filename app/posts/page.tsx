import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "Here are all my posts",
};

export default async function PostsPage() {
  return (
    <main>
      <h1>This is the snippets page</h1>
      <p>We love snippets</p>
    </main>
  );
}
