import { Post } from "@/types";

import { API } from "@/constants";

export async function getPosts(): Promise<Post[]> {
  return await fetch(API.POSTS.GET(), {}).then((res) => res.json());
}
