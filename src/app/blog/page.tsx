import Link from "next/link";
import { articles } from "../data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon Blog",
  description: "Bienvenue sur mon Blog",
};

export default function Blog() {
  return (
    <>
      <h1 className="p-2 m-5 text-center text-lg font-bold text-green-800 border-[2px]  border-green-600 rounded-lg ">
        Articles
      </h1>
      <div className="m-3 p-2 ">
        <ul>
          {articles.map((article) => (
            <li className="p-2 m-2 flex flex-col" key={article.id}>
              <span
                className="p-2 m-3 border-[2px] rounded-lg
               text-center"
              >
                {article.id}
              </span>
              {article.title} le {article.date} par {article.date}
              <Link
                className="text-orange-700 mx-3"
                href={`/blog/${article.id}`}
              >
                Voir l'article
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
