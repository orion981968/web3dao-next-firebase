"use client";
import React, { useState, useEffect } from "react";
import {
  ref,
  onValue,
  DataSnapshot,
  query,
  orderByChild,
  limitToLast,
} from "firebase/database";
import { database1 } from "@/firebase/firebase";
import Link from "next/link";
import styles from "../../styles/Blog.module.css";
import Article from "../../../types/Article";

const BlogPage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(true);
      const interval = setInterval(() => {
        setLoadingProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return Math.min(oldProgress + 5, 100); // Increase progress
        });
      }, 100); // Adjust interval as needed

      const articlesRef = query(
        ref(database1, "ArticlesProd"),
        orderByChild("publishedAt"),
        limitToLast(20),
      );

      const unsubscribe = onValue(articlesRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val() as { [key: string]: Article };
        const articlesArray: Article[] = data
          ? Object.keys(data)
              .map((key) => ({ ...data[key], id: key }))
              .sort((a, b) => b.date.localeCompare(a.date))
          : [];
        setArticles(articlesArray);
        setLoading(false);
        clearInterval(interval);
        setLoadingProgress(100);
      });

      return () => {
        unsubscribe();
        clearInterval(interval);
      };
    }
  }, []);

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const articlesPerPage: number = 12;
  const totalPages: number = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle: number = currentPage * articlesPerPage;
  const indexOfFirstArticle: number = indexOfLastArticle - articlesPerPage;
  const currentArticles: Article[] = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

  const handleNextPage = (): void => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = (): void => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="flex flex-col items-center px-2 sm:px-5">
      {loading ? (
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full bg-red-600"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      ) : (
        <div className="mb-5 text-center text-xl sm:text-2xl">
          <br />
          <h1>Blog</h1>
          <p>Get educated.</p>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col items-center justify-center overflow-hidden rounded-lg border border-red-600 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="p-4 text-center">
              <h2 className="mb-2 text-xl font-semibold">{article.title}</h2>
              <p className="mb-4 text-sm text-gray-600">
                Published on {formatDate(article.date)} by {article.author}
              </p>
              <Link href={`/blog/article-details/${article.id}`} passHref>
                <button className="mt-auto rounded bg-red-700 px-4 py-2 font-bold  hover:bg-red-500">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          « Previous
        </button>
        <span className="text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next »
        </button>
      </div>
      <br />
    </div>
  );
};

export default BlogPage;
