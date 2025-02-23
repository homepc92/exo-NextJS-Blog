import Link from "next/link";
import { articles } from "../../data";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const article = articles.find(
    (element) => element.id === parseInt(params.id)
  );
  return {
    title: article?.title,
    description: article?.description,
  };
}

export default function ArticleId({ params }: { params: { id: string } }) {
  const article = articles.find(
    (element) => element.id === parseInt(params.id)
  );
  return (
    <>
      {article ? (
        <div className="m-5 ">
          <h2>
            {article.title} le {article.date} par {article.author}
          </h2>
          <p>{article.description}</p>
        </div>
      ) : (
        <div className="my-5 gap-3 text-lg flex items-center flex-col ">
          <h1 className=" text-red-700 font-bold text-[2rem] ">
            Cette article n'existe pas{" "}
          </h1>
          <Link href={"/blog"}>Revenir à la page des article</Link>
        </div>
      )}
    </>
  );
}
