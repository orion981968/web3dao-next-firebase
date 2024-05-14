// /components/cards/BlogCard.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  post: any;
};

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Link href={`/blog/${post.id}`} passHref>
      <div className="cursor-pointer rounded-lg border p-4 shadow-md hover:shadow-lg dark:border-gray-700">
        <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {post.content.substring(0, 100)}...
        </p>
        {post.imageUrl && (
          <div className="mt-3">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={150}
              height={150}
              className="rounded"
            />
          </div>
        )}
        <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <p>Author: {post.author}</p>
          <p>Dept: {post.department}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
