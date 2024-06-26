import React, { useEffect, useState } from 'react';
import styles from "../../style";
import { firestore } from "../login/firebase";
import { telangana } from '../../assets';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = await firestore.collection('blogs').get();
        const fetchedBlogs = blogsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-about-gradient rounded-[10px] mb-2">
          <img src={telangana} alt="about" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Blogs</span> by Cyber Ambassador Program
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Explore <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Blogs</span> 
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={blog.imageUrl} alt={blog.title} className="w-full h-60 object-cover object-center" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* Insert any additional design elements or background images here */}
      </div>
    </section>
  );
};

export default Blogs;
