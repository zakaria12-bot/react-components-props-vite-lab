import Article from "./Article";

// ArticleList maps App's posts into Article children, keyed by each post id.
function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

export default ArticleList;