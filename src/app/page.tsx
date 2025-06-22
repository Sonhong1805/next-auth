"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <p>Hello world</p>
      {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
      {!session ? (
        <p>
          <Link href="/login">Đăng nhập</Link>
        </p>
      ) : (
        <button onClick={() => signOut()}>Đăng xuất</button>
      )}
    </div>
  );
}
