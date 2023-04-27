import ISearchPost from "./search-post.type";

const POSTS: ISearchPost[] = [
  {
    id: 1,
    title: "TDD definition",
    body: "TDD is a software development process that relies on the repetition of a very short development cycle: first the developer writes an (initially failing) automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards.",
    uri: "tdd-definition",
    category: {
      id: 1,
      name: "TDD",
      uri: "tdd"
    }
  },
];

export default POSTS;