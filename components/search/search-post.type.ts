export default interface ISearchPost {
  id: number;
  title: string;
  body: string;
  uri: string;

  category: {
    id: number;
    name: string;
    uri: string;
  }
}