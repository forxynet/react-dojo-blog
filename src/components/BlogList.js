import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogList({ blogs, title }) {
  return (
    <div className='blog-list'>
      <h2>{blogs.length > 0 ? title : 'There is no blogs to show'}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
