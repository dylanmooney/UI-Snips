import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

import { LINKS } from "@/constants";

import { AuthButton } from "./AuthButton";

export async function Navbar() {
  const session = await getServerSession();

  return (
    <nav className="sticky z-10 bg-slate-950/30 backdrop-blur-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center p-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="UI Snippets logo" width={179} height={35} />
        </Link>
        <ul className="grid auto-cols-fr grid-flow-col gap-4">
          {LINKS.map(({ href, text }) => (
            <li key={`nav-item-${text}`} className="flex justify-center">
              <Link href={href} className="rounded p-2 tracking-wide text-slate-200">
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <AuthButton user={session?.user} />
      </div>
    </nav>
  );
}
