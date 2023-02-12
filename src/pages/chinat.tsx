import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Chinat: NextPage = () => {

  return (
    <>
      <main className="">
        <h1>This is chinat page</h1>
      </main>
      <Link href="/" className="flex max-w-xs text-blue-600 flex-col gap-4 rounded-xl p-4 hover:bg-white/20">
        <p>Go to homepage</p>
      </Link>
    </>
  );
};

export default Chinat;
