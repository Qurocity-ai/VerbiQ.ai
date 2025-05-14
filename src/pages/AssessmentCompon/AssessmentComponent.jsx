import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './AssessmentComponent.module.css';

const items = [
    {
      label: 'Assessment by a <br /> Native Speaker',
      icon: '/assets/Graph1.png',
      title: 'Assessment by a Native Speaker',
      points: [
        'Responses are reviewed by certified native linguists for real-world accuracy, tone, and regional nuance.',
        'Ensures evaluation goes beyond textbook correctness, capturing natural fluency and cultural context.',
      ],
    },
    {
      label: 'Business and <br /> Culture Ethics',
      icon: '/assets/Graph2.png',
      title: 'Business and Culture Ethics',
      points: [
        'Candidates are assessed on communication norms, decision-making, and situational etiquette in cross-cultural workplaces.',
        'Scenarios reflect professional behavior, hierarchy awareness, and sensitivity to global workplace ethics.',
      ],
    },
    {
      label: 'Scenario-Based <br /> Assessment',
      icon: '/assets/Graph3.png',
      title: 'Scenario-Based Assessment',
      points: [
        'Real-life workplace situations test a candidate’s ability to respond under pressure and with professionalism.',
        'Evaluates practical communication skills across tasks like conflict resolution, reporting, and feedback delivery.',
      ],
    },
    {
      label: 'Domain-Based <br /> Assessment',
      icon: '/assets/Graph4.png',
      title: 'Domain-Based Assessment',
      points: [
        'Tailored questions reflect specific industry jargon and client-facing situations (e.g., tech support, finance, healthcare).',
        'Tests both linguistic accuracy and domain familiarity to ensure job readiness from day one.',
      ],
    },
  ];
  

const AssessmentComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.rightPane}>
  <div className={styles.contentWrapper}>
    <div className={styles.iconColumn}>
      {items.map((item, index) => (
        <div
          key={index}
          className={`${styles.iconBox} ${
            activeIndex === index ? styles.activeBox : ''
          }`}
          onMouseEnter={() => setActiveIndex(index)}
        >
          <img src={item.icon} alt={item.title} />
          <p dangerouslySetInnerHTML={{ __html: item.label }} />
        </div>
      ))}
    </div>

    <div className={styles.contentBox}>
      <h3>{items[activeIndex].title}</h3>
      <ul>
        {items[activeIndex].points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  </div>

  <hr className={styles.hrline} />
  <div className={styles.rightFooter}>
    <h3>Assessments personalized for you</h3>
    <p>
      Tailored evaluations that align with your unique hiring needs and cultural expectations
    </p>
  </div>
</div>

  );
};

export default AssessmentComponent;
