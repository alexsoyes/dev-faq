import ISearchPost from "./search-post.type";

export default async function query(searchedText: string, signal: AbortSignal): Promise<ISearchPost[]> {

    const slugified = searchedText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const data = await fetch(`${process.env.API_URL}`, { signal })
    const json = await data.json()

    return json;
}