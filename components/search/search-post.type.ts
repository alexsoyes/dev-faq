export interface ISearchPost {
  id: number;
  title: string;
  uri: string;

  category: {
    id: number;
    name: string;
    uri: string;
  }
}

export interface IPost extends ISearchPost {
  body: string;
}

