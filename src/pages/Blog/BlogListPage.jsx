import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogListPage.module.css';
import config from "../../services/config";
import { motion } from 'framer-motion';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetch(`${config.apiUrl}/blog/blogs`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Skeleton loader component
  const SkeletonCard = () => (
    <div className={`${styles.blogCard} ${styles.skeleton}`}>
      <div className={`${styles.skeletonImage} ${styles.shimmer}`} style={{ width: '300px', margin: '0' }}></div>
      <div className={`${styles.skeletonTitle} ${styles.shimmer}`}></div>
      <div className={`${styles.skeletonDate} ${styles.shimmer}`}></div>
      <div className={`${styles.skeletonSummary} ${styles.shimmer}`}></div>
      <div className={`${styles.skeletonSummary} ${styles.shimmer}`} style={{ width: '80%' }}></div>
      <div className={`${styles.skeletonReadMore} ${styles.shimmer}`}></div>
    </div>
  );

  // Array of skeleton cards based on blogs per page
  const skeletonCards = Array(blogsPerPage).fill().map((_, index) => (
    <motion.div
      key={`skeleton-${index}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <SkeletonCard />
    </motion.div>
  ));

  return (
    <>
      <div className={styles.envelope}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blogs
        </motion.h1>

        <div className={styles.blogsContainer}>
          {loading ? (
            <div className={styles.blogGrid}>
              {skeletonCards}
            </div>
          ) : currentBlogs.length > 0 ? (
            <div className={styles.blogGrid}>
              {currentBlogs.map((blog) => (
                <motion.div
                  key={blog._id}
                  className={styles.blogCard}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
                    <img src={blog.imageUrl} alt={blog.title} className={styles.blogImage} />
                    <h2 className={styles.blogTitle}>{blog.title}</h2>
                    <p className={styles.blogDate}>{formatDate(blog.date)}</p>
                    <p className={styles.blogSummary}>{blog.summary}</p>
                    <div className={styles.readMore}>Read More</div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className={styles.noBlogs}>No blogs found</div>
          )}

          {/* Pagination */}
          {!loading && currentBlogs.length > 0 && (
            <motion.div
              className={styles.pagination}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogListPage;