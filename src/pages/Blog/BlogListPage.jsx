// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './BlogListPage.module.css';
// import config from "../../services/config";
// import { FourSquare } from 'react-loading-indicators';



// const BlogListPage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const blogsPerPage = 9; 

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     fetch(`${config.apiUrl}/blog/blogs`)
//       .then((response) => response.json())
//       .then((data) => {
//         setBlogs(data.reverse());
//       })
//       .catch((error) => console.error('Error fetching blogs:', error));
//   }, []);

//   // Get the blogs for the current page
//   const indexOfLastBlog = currentPage * blogsPerPage;
//   const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
//   const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

//   // Pagination Logic
//   const totalPages = Math.ceil(blogs.length / blogsPerPage);
//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo(0, 0);
//   };

//   const formatDate = (dateString) => {
//     const options = { day: 'numeric', month: 'long', year: 'numeric' };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   return (
//     <>
    
//     <div className={styles.envelope}>

//     <h1>Blogs</h1>

//     <div className={styles.blogsContainer}>
//       {currentBlogs.length > 0 ? (
//         <>
//           <div className={styles.blogGrid}>
//             {currentBlogs.map((blog) => (
//               <div key={blog._id} className={styles.blogCard}>
//                 <Link to={`/blogs/${blog._id}`} style={{ textDecoration: 'none' }}>
//                   <img src={blog.imageUrl} alt={blog.title} className={styles.blogImage} />
//                   <h2 className={styles.blogTitle}>{blog.title}</h2>
//                   <p className={styles.blogDate}>{formatDate(blog.date)}</p> {/* Format date */}
//                   <p className={styles.blogSummary}>{blog.summary}</p>
//                   <div className={styles.readMore}>Read More</div>
//                 </Link>
//               </div>
//             ))}
//           </div>

//           {/* Pagination */}
//           <div className={styles.pagination}>
//             {Array.from({ length: totalPages }, (_, index) => (
//               <button
//                 key={index + 1}
//                 className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
//                 onClick={() => handlePageClick(index + 1)}
//               >
//                 {index + 1}
//               </button>
//             ))}
//           </div>
//         </>
//       ) : (
//         <>
//         {/* <p>Loading blogs ...</p> */}
//         <FourSquare color={["#a9b9c1", "#bda9c1", "#c1b1a9", "#adc1a9"]} />
//       </>
        
//       )}
//     </div>
//     </div>
    
//     </>
//   );
// };

// export default BlogListPage;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './BlogListPage.module.css';
import config from "../../services/config";
import { FourSquare } from 'react-loading-indicators';
import { motion } from 'framer-motion';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${config.apiUrl}/blog/blogs`)
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.reverse());
      })
      .catch((error) => console.error('Error fetching blogs:', error));
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
          {currentBlogs.length > 0 ? (
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
            >
              <FourSquare color={["#a9b9c1", "#bda9c1", "#c1b1a9", "#adc1a9"]} />
            </motion.div>
          )}

          {/* Pagination */}
          {currentBlogs.length > 0 && (
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
