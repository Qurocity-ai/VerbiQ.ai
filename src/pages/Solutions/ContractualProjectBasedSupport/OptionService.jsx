import React, { useState } from "react";
import styles from './OptionServices.module.css';
import { motion, AnimatePresence } from "framer-motion";

const OptionService = () => {
  const cardData = [
    {
      id: 1,
      icon: "/assets/globalPool.png",
      title: "Global pool of linguistic experts",
      subtitle: "Network access for language and dialects",
      detail: `We specialize in sourcing top-tier talent across key linguistic areas, including Multilingual Writers and Editors, Copywriters, Instructional Writers, and Subtitlers. Our network also covers Professional Interpreters, Certified Translators, Localization and Transcription Experts. In AI model training and linguistic annotation, we provide access to skilled Speech and Text Annotators, Transcribers, Linguistic Auditors, and Sentiment Analysts — ensuring end-to-end language support for global projects.`,
    },
    {
      id: 2,
      icon: "/assets/end-to-end.png",
      title: "End-to-end hiring & onboarding",
      subtitle: "From sourcing to seamless deployment",
      detail: `We handle the entire hiring process, from role scoping and requirement mapping to interview scheduling, coordination, and payroll-management. Our platform ensures a seamless onboarding experience for new hires, enabling smooth integration into your team.`,
    },
    {
      id: 3,
      icon: "/assets/flexible-hiring.png",
      title: "Flexible hiring models",
      subtitle: "Contractual, freelance, and project-based options",
      detail: `We offer a variety of flexible hiring options, including contract-based engagements, part-time and full-time positions, and on-demand talent sourcing. With quick turnaround hiring and scalable team extensions, we provide the flexibility to meet your business needs.`,
    },
    {
      id: 4,
      icon:  '/assets/quality-driven.png',
      title: "Quality-driven, Ready profiles",
      subtitle: "Language + domain proficiency assessments",
      detail: `Our profiles are meticulously assessed for language, communication, and domain-specific expertise. We ensure candidates are a cultural and contextual fit, delivering consistent performance and ready-to-deploy talent across various roles with industry-specific assessments.`,
    },
  ];
  
  
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className={styles.grid}>
    {cardData.map((card) => (
      <div
        key={card.id}
        className={styles.card}
        onMouseEnter={() => setHoveredId(card.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <AnimatePresence mode="wait">
          {hoveredId !== card.id ? (
            <motion.div
              key="default"
              className={styles.serviceCard}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <img src={card.icon} alt={card.title} className={styles.icon} />
              <div className={styles.textBlock}>
                <div className={styles.title}>{card.title}</div>
                <div className={styles.subtitle}>{card.subtitle}</div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hover"
              className={styles.cardBack}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.section}>
                <h4 className={styles.cardTitle}>{card.detail}</h4>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}
  </div>


  );
};

export default OptionService;
