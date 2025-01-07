import BlogList from './BlogList';
import useFetch from './useFetch';

export default function Home() {
  const { data: blogs, isPending, error } = useFetch('https://node-server-json-db.onrender.com/blogs');
  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  )
}
