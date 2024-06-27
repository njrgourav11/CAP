import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const db = getDatabase();
        const blogRef = ref(db, `blogs/${id}`);

        onValue(blogRef, (snapshot) => {
          if (snapshot.exists()) {
            setBlog(snapshot.val());
          } else {
            console.log('No blog found');
          }
          setLoading(false);
        });
      } catch (error) {
        console.error('Error fetching blog: ', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto my-10">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg">
        <img className="rounded-t-lg" src={blog.imageUrl} alt={blog.title} />
        <div className="p-5">
          <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
          <p className="text-gray-700 mb-3">{blog.content}</p>
          <p className="text-gray-500 text-sm">Posted by {blog.author} on {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
