import { IPost, ISearchPost } from "./search-post.type";

export async function search(searchedText: string, signal?: AbortSignal): Promise<ISearchPost[]> {

    const slugified = searchedText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const data = await findAll(slugified);

    return data;
}

export async function findAll(slug: string): Promise<ISearchPost[]> {
    const data = await fetch(`${process.env.API_URL}/?query=${slug}`)
    const json = await data.json()

    return json;
}

export async function findOne(slug: string): Promise<IPost[] | null> {
    const data = await fetch(`${process.env.API_URL}/?query=${slug}`)
    const json = await data.json()

    if (json.length > 0) {
        return json[0];
    }

    return null;
}