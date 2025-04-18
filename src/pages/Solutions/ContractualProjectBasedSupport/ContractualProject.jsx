import React from 'react'
import style from './ContractualProject.module.css'
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

import ServicesContractual from './ServicesContractual';
import OptionService from './OptionService';


export default function ContractualProject() {

  

  return (
    <div className={style.main}>
      <div className={style.heading} >
        <h2>
        <span className={style.line1}>Global Language Talent Solutions</span><br />
        <span className={style.line2}>Flexible Expertise, Unmatched Value</span>

        </h2>

      </div>
      <div className={style.container}>
      <h3 className={style.subheading}>Build Without Borders</h3>
    </div>
    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className={style.fullLine}
>
  <span className={style.number}>
    <CountUp start={10000} end={20000} duration={4} separator="," />+
  </span>
  <span className={style.textNormal}>
    &nbsp;Linguistic specialists worldwide and also reduce cost by&nbsp;
  </span>
  <span className={style.highlight}>30%</span>

  {/* ✅ Wrap image in motion.div too */}
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={style.image}
  >
    <img src="/assets/Map.png" alt="Dotted Map Icon" />
  </motion.div>
</motion.div>

        
      
   {/* <ServicesContractual/> */}
   <OptionService/>
      <div className={style.taglineWrapper}>
  <p className={style.tagline}>
    Whether you're a startup training your first model or an enterprise managing multi-market content, we offer unmatched reach and precision.
  </p>
</div>

       </div>
  )
}
