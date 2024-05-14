"use client";
import { useEffect, useState } from "react";
import { getDatabase, ref, get, DataSnapshot } from "firebase/database";
import styles from "@/styles/ArticleDetails.module.css";
import { useParams } from "next/navigation";
import { app1 } from "../../../../../firebase/firebase";

interface Article {
  title: string;
  date: string;
  author: string;
  content: string;
}

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const db = getDatabase(app1);
    if (typeof id === "string") {
      const articleRef = ref(db, "ArticlesProd/" + id);

      // Simulate loading
      const interval = setInterval(() => {
        setLoadingProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 100;
          }
          return Math.min(oldProgress + 1, 100);
        });
      }, 20); // Adjust time here to control speed

      get(articleRef)
        .then((snapshot: DataSnapshot) => {
          if (snapshot.exists()) {
            setArticle(snapshot.val() as Article);
            clearInterval(interval);
            setLoadingProgress(100);
          } else {
            console.log("No data available");
            clearInterval(interval);
          }
        })
        .catch((error: any) => {
          console.error(error);
          clearInterval(interval);
        });
    }
  }, [id]);

  return (
    <div className={styles.articleDetails}>
      {article ? (
        <>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.meta}>
            Published on {new Date(article.date).toLocaleDateString()} by{" "}
            {article.author}
          </p>

          {article.content.split("\n").map((paragraph, index) => (
            <p key={index} className={styles.content}>
              {paragraph}
            </p>
          ))}
        </>
      ) : (
        <div className={styles.loadingBarContainer}>
          <div
            className={styles.loadingBar}
            style={{ width: `${loadingProgress}%` }}
          >
            {loadingProgress}%
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleDetails;
