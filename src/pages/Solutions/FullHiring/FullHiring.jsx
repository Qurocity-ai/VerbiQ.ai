// import React from 'react'
// import FullHiringA from './FullHiringA'
// import FullHiringB from './FullHiringB'

// function FullHiring() {
//   return (
//     <div>
//       <FullHiringA/>
//       <FullHiringB/>
//     </div>
//   )
// }

// export default FullHiring
//code
import React from "react";
import FullHiringA from "./FullHiringA";
import FullHiringB from "./FullHiringB";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function FullHiring() {
  return (
    <div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FullHiringA />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FullHiringB />
      </motion.div>
    </div>
  );
}

export default FullHiring;
