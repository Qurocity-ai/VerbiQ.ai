import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./NewsDetailsPage.module.css";
import config from "../../services/config";
import { FourSquare } from "react-loading-indicators";

const NewsDetailsPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://verbiq-backend1.onrender.com/newsletter/getNewslettersById/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog:", error);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className={styles.singleBlogContainer}>
      {loading ? (
        <div className={styles.loader}>
          <FourSquare color={["#a9b9c1", "#bda9c1", "#c1b1a9", "#adc1a9"]} />
        </div>
      ) : blog ? (
        <>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogDate}>{formatDate(blog.date)}</p>
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className={styles.blogImage}
            />
          )}
          <div className={styles.blogContent}>
            {blog.content.map((section) => (
              <div key={section._id} className={styles.blogSection}>
                <h3 className={styles.sectionTitle}>{section.type}</h3>
                <p className={styles.sectionText}>{section.value}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className={styles.errorText}>Blog not found.</p>
      )}
    </div>
  );
};

export default NewsDetailsPage;
