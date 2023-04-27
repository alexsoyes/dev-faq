import { getPosts } from '@/components/search/search-post.model'
import { ISearchPost } from '@/components/search/search-post.type'
import type { NextApiRequest, NextApiResponse } from 'next'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISearchPost[]>
) {
  res.status(200).json(getPosts())
}
