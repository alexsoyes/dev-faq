import { getPostURIs } from "@/components/search/search-post.model";
import { IPost } from "@/components/search/search-post.type";
import { findOne } from "@/components/search/search.query";
import Link from "next/link";

export default function Post(props: { post: IPost }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className="h1">{props.post.title}</h1>
        <div>
          Category:{" "}
          <Link href={props.post.category.uri}>{props.post.category.name}</Link>
        </div>
      </header>

      <div dangerouslySetInnerHTML={{ __html: props.post.body }} />
    </main>
  );
}

export async function getStaticPaths() {
  const URIs = await getPostURIs();

  return {
    paths: [{ params: URIs.map((uri: string) => ({ uri })) }],
    fallback: false,
  };
}

export async function getStaticProps(params: { uri: string }) {
  const post = await findOne(params.uri);

  return { props: { post } };
}
