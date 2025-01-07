import { useHistory, useParams } from "react-router-dom"
import useFetch from "./useFetch";

export default function BlogDetails() {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(`https://node-server-json-db.onrender.com/blogs/${id}`);
  const history = useHistory();

  function handleDelteBlog() {
    fetch(`https://node-server-json-db.onrender.com/blogs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelteBlog}>Delete</button>
        </article>
      )}
    </div>
  )
}
