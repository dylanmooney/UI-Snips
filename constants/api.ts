const BASE_URL = "http://localhost:3000";
const BASE_API_URL = `${BASE_URL}/api`;

export const API = {
  POSTS: {
    /**
     * Generates a URL for fetching posts.
     * @param slug - Optional slug for a specific post.
     * @returns URL string for the API endpoint.
     */
    GET: (slug?: string) => (slug ? `${BASE_API_URL}/posts/${slug}` : `${BASE_API_URL}/posts`),
  },
} as const;
