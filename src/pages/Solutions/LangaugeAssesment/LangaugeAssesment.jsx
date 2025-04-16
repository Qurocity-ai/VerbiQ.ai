// import React from 'react'
// import LanguageAssessmentA from './LangaugeAssesmentA'
// import LangaugeAssesmentB from './LangaugeAssesmentB'
// import LangaugeAssesmentC from './LangaugeAssesmentC'

// function LangaugeAssesment() {
//   return (
//     <div>
//       <LanguageAssessmentA/>
//       <LangaugeAssesmentB/>
//       <LangaugeAssesmentC/>
//     </div>
//   )
// }

// export default LangaugeAssesment


import React from 'react';
import LanguageAssessmentA from './LangaugeAssesmentA';
import LangaugeAssesmentB from './LangaugeAssesmentB';
import LangaugeAssesmentC from './LangaugeAssesmentC';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function LangaugeAssesment() {
  return (
    <div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <LanguageAssessmentA />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <LangaugeAssesmentB />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <LangaugeAssesmentC />
      </motion.div>
    </div>
  );
}

export default LangaugeAssesment;
