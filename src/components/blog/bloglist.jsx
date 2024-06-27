import React from "react";
import BlogCard from "./blogcard";

const BlogList = ({ blogs }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
            ))}
        </div>
    );
};

export default BlogList;
