import React from "react";
import styles from "./FullHiringA.module.css";
import { Typewriter } from 'react-simple-typewriter';

const FullHiringA = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Find the Right Talent for Your Business <span className={styles.highlight}>Faster & Smarter</span>
      </h2>
      <p className={styles.subtitle}>
        Whether you're looking for top-tier professionals in
        
      </p>
      <p>
      {/* <span className={styles.boldText}> Customer Support, Tech Support, Content, IT, Sales, or Operations.</span> */}
      <span className={styles.boldText}>
  <Typewriter
    words={['Customer Support', 'Tech Support', 'Content', 'Information Technology', 'Sales', 'Operations']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={60}
    deleteSpeed={40}
    delaySpeed={1500}
  />
</span>
      </p>
    </div>
  );
};

export default FullHiringA;



// import React from "react";

// const FullHiringA = () => {
//   return (
//     <div className="text-center px-4 py-6 ">
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b1545] mb-2 leading-tight">
//         Find the Right Talent for Your Business{" "}
//         <span className="font-semibold">Faster & Smarter</span>
//       </h2>
//       <p className="text-base sm:text-lg text-gray-600">
//         Whether you're looking for top-tier professionals in{" "}
//         <span className="font-bold text-gray-700">
//           Customer Support, Tech Support, Content, IT, Sales, or Operations.
//         </span>
//       </p>
//     </div>
//   );
// };

// export default FullHiringA;

