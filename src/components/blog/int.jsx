import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push, set } from 'firebase/database'; // Firebase Realtime Database
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'; // Firebase Storage
import styles from '../../style';

const BlogPostForm = ({ onNewPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState(false); // State to track upload status

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setUploading(true); // Start upload process

    const auth = getAuth();
    if (!auth.currentUser) {
      setMessage('You must be logged in to submit a blog post.');
      setUploading(false); // Reset upload status
      return;
    }

    try {
      let imageUrl = '';
      if (image) {
        const storage = getStorage();
        const storageRef2 = storageRef(storage, `images/${image.name}`);
        await uploadBytes(storageRef2, image);
        imageUrl = await getDownloadURL(storageRef2);
      }

      const db = getDatabase();
      const newPostRef = push(ref(db, 'posts')); // Push a new post under 'posts'
      await set(newPostRef, {
        title,
        content,
        imageUrl,
        createdAt: new Date().toISOString(),
        author: auth.currentUser.uid,
      });

      setTitle('');
      setContent('');
      setImage(null);
      setUploading(false); // Reset upload status

      setMessage('Blog post submitted successfully!');
      onNewPost(); // Notify parent component or update state with new post
    } catch (error) {
      console.error('Error submitting blog post:', error);
      setMessage(`Failed to submit blog post: ${error.message}`);
      setUploading(false); // Reset upload status
    }
  };

  return (
    <div className={`p-4 max-w-lg mx-auto bg-white rounded-md shadow-md ${styles.paddingY}`}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Post a New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-600">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="6"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Image:</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="mt-4 p-4 bg-blue-600 text-white rounded-md" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Submit'}
        </button>
      </form>
      {message && (
        <p
          className={`mt-4 text-center text-gray-800 ${
            message.includes('Failed') ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default BlogPostForm;
