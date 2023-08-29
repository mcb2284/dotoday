import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import Hero from "~/components/hero/hero";
import Landing from "~/components/landing/landing";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>DoToday</title>
        <meta name="DoToday" content="DoToday" />
      </Head>
      <main>
        <SignedIn>
          <Hero />
        </SignedIn>
        <SignedOut>
          <Landing />
        </SignedOut>
      </main>
    </>
  );
}
