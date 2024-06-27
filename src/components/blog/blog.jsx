import React, { useState, useEffect } from "react";
import styles from "../../style";
import { getDatabase, ref, onValue } from "firebase/database";
import BlogCard from "./blogcard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const db = getDatabase();
        const blogsRef = ref(db, "blogs");

        onValue(blogsRef, (snapshot) => {
          if (snapshot.exists()) {
            const blogsData = snapshot.val();
            const blogsArray = Object.keys(blogsData).map((key) => ({
              id: key,
              ...blogsData[key],
            }));
            setBlogs(blogsArray);
          } else {
            console.log("No blogs found");
          }
          setLoading(false);
        });
      } catch (error) {
        console.error("Error fetching blogs: ", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Split blogs into chunks of 3 for display in rows
  const chunkedBlogs = blogs.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <section id="blogs" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-about-gradient rounded-[10px] mb-2">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">Blogs</span>
          </h1>
        </div>
        <div className="flex flex-col">
          {loading ? (
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Loading...</p>
          ) : (
            chunkedBlogs.map((row, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {row.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
