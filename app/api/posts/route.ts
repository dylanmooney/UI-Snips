import { NextResponse } from "next/server";

import { Post } from "@/types";

const posts: Post[] = [
  {
    title: "The Importance of Healthy Eating",
    slug: "importance-of-healthy-eating",
    content: "Eating a balanced diet is crucial for maintaining good health and well-being.",
  },
  {
    title: "How to Exercise at Home",
    slug: "how-to-exercise-at-home",
    content:
      "You don't need a gym membership to stay fit; here are some tips for exercising at home.",
  },
  {
    title: "The Benefits of Meditation",
    slug: "benefits-of-meditation",
    content: "Meditation can help reduce stress and improve your mental clarity.",
  },
  {
    title: "Why Sleep Matters",
    slug: "why-sleep-matters",
    content: "Getting enough sleep is essential for both physical and mental health.",
  },
  {
    title: "The Basics of Investing",
    slug: "basics-of-investing",
    content: "Investing can be a great way to grow your wealth over time.",
  },
  {
    title: "Tips for Remote Work",
    slug: "tips-for-remote-work",
    content:
      "Working from home can be challenging; here are some tips to help you stay productive.",
  },
  {
    title: "The History of Coffee",
    slug: "history-of-coffee",
    content: "Coffee has a rich history and has been consumed for centuries.",
  },
  {
    title: "How to Take Better Photos",
    slug: "how-to-take-better-photos",
    content: "Improving your photography skills can be both fun and rewarding.",
  },
  {
    title: "The Future of Renewable Energy",
    slug: "future-of-renewable-energy",
    content: "Renewable energy sources like solar and wind are becoming increasingly important.",
  },
  {
    title: "The Role of Technology in Education",
    slug: "role-of-technology-in-education",
    content: "Technology is changing the way we learn and teach.",
  },
];

export async function GET() {
  return NextResponse.json(posts);
}
