import React from "react";
import Title from "../../components/title/Title";
import BlogList from "../../components/blog/BlogList";

const Blog = () => {
  return (
    <div>
      <div className="container">
        <Title>Bài viết</Title>
        <BlogList></BlogList>
      </div>
    </div>
  );
};

export default Blog;
