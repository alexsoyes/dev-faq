import { getPosts } from "@/components/search/search-post.model";
import { ISearchPost } from "@/components/search/search-post.type";
import Link from "next/link";

type Props = {
  posts: ISearchPost[];
};

export default function Sitemap(props: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="h1">Sitemap</h1>
      <ul>
        {props.posts.map((post) => (
          <li key={post.id}>
            <Link href={`${post.category.uri}/${post.uri}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return { props: { posts } };
}
