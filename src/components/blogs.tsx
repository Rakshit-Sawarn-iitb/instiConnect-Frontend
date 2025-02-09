import React, { useEffect, useState } from "react";
import { fetchBlog } from "../api";
import BlogCard from "./BlogCard";

interface Blog {
  id: number;
  title: string;
  text: string;
  date: string;
  likes: number;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await fetchBlog();
        setBlogs(response.data.content);
      } catch (error) {
        setError("Failed to fetch blogs.");
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="h-[100px] overflow-y-scroll w-contain p-8">
      <h1 className="text-white text-2xl mb-6">Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            text={blog.text}
            date={blog.date}
            likes={blog.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
