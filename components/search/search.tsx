import Link from "next/link";
import { useRef, useState } from "react";
import { ISearchPost } from "./search-post.type";
import { search } from "./search.query";

export default function Search() {
  const abortController = useRef<AbortController>();

  const [searchedResults, setSearchedResults] = useState<ISearchPost[]>([]);
  const [searchedValue, setSearchedValue] = useState<string>("");

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.target.value);

    if (abortController.current) {
      abortController.current.abort();
    }

    abortController.current = new AbortController();

    const data = await search(searchedValue, abortController.current.signal);

    setSearchedResults(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form>
        <label htmlFor="search">Searching for:</label>
        <input
          onChange={onChange}
          value={searchedValue}
          type="search"
          name="search"
          id="search"
        />

        <p>You searched: {searchedValue}</p>
        <p>
          <strong>Results:</strong> {searchedResults.length}
        </p>

        <div className="results">
          {searchedResults.length > 0 && (
            <ul>
              {searchedResults.map((postResult) => (
                <li key={postResult.id}>
                  <Link href={`${postResult.category.uri}/${postResult.uri}`}>
                    {postResult.title} ({postResult.category.name})
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit">Validate</button>
      </form>
    </main>
  );
}
