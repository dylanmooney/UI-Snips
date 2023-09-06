"use client";

import { SessionContextValue, signIn, signOut } from "next-auth/react";

import { Avatar, Button } from "@/components/shared";

type AuthButtonProps = {
  user?: NonNullable<SessionContextValue["data"]>["user"];
};

export async function AuthButton({ user }: AuthButtonProps) {
  if (!user) {
    return (
      <Button onClick={() => signIn()} className="ml-auto">
        Log in
      </Button>
    );
  }

  return (
    <div className="ml-auto flex items-center gap-x-5">
      {user.image && <Avatar image={user.image} />}
      <Button onClick={() => signOut()}>Log out</Button>;
    </div>
  );
}
