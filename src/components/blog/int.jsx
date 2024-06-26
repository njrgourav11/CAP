import React, { useState } from "react";
import { firestore, storage } from "../login/firebase";
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const BlogPostForm = ({ onNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const auth = getAuth();
    if (!auth.currentUser) {
      setMessage("You must be logged in to submit a blog post.");
      return;
    }

    try {
      let imageUrl = "";
      if (image) {
        const imageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const newPost = {
        title,
        content,
        imageUrl,
        createdAt: new Date(),
        author: auth.currentUser.uid,
      };

      const docRef = await addDoc(collection(firestore, "blogs"), newPost);

      setTitle("");
      setContent("");
      setImage(null);

      setMessage("Blog post submitted successfully!");
      onNewPost({ ...newPost, id: docRef.id }); // Update state with new post
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage(`Failed to submit blog post: ${error.message}`);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-md shadow-md">
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
        <button type="submit" className="mt-4 p-4 bg-blue-600 text-white rounded-md">Submit</button>
      </form>
      {message && <p className="mt-4 text-center text-gray-800">{message}</p>}
    </div>
  );
};

export default BlogPostForm;
