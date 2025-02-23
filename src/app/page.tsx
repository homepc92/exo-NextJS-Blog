import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5">
      <h1 className=" my-2 text-cyan-800 text-3xl ">Bienvenue sur mon blog</h1>
      <Link href={"/blog"}>Acceder au blog</Link>
    </main>
  );
}
