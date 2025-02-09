import React, { useEffect, useState } from "react";
import { fetchBlog } from "../api";
import BlogCard from "./blogCard";

interface Blog {
  id: number;
  name: string;
  description: string;
  date: string;
  text: string;
  likes: number;
  comments: number;
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
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-white text-2xl mb-6">Blogs</h1>
      <div className="space-y-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            name={blog.name}
            description={blog.description}
            date={blog.date}
            text={blog.text}
            likes={blog.likes}
            comments={blog.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
