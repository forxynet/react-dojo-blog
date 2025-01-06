import { useState } from 'react'
import { useHistory } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    const blog = { title, body, author };

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        setIsPending(false);
        //history.go(-1);
        history.push('/');
      })
    }, 1000);

    clearForm();
  }

  function clearForm() {
    setTitle('');
    setBody('');
    setAuthor('');
  }

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>Blog body:</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value=''>Seçiniz..</option>
          <option value='mario'>Mario</option>
          <option value='yoshi'>yoshi</option>
        </select>

        {!isPending ? <button>Add blog</button> : <button disabled>Adding blog...</button>}
      </form>
    </div>
  )
}
