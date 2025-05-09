import React, { useState }  from 'react'
import styles from './NewGraph.module.css';

function NewGraph() {
    const cardData = [
        {
          id: 1,
          title: 'Assessment by a Native Speaker',
          icon: '/icons/native-icon.svg', // Replace with your paths
          content: {
            heading: 'Assessment by a Native Speaker',
            points: [
              'Responses are reviewed by certified native linguists for real-world accuracy, tone, and regional nuance.',
              'Ensures evaluation goes beyond textbook correctness, capturing natural fluency and cultural context.'
            ],
            subtitle: 'Assessments personalized for you',
            description: 'Tailored evaluations that align with your unique hiring needs and cultural expectations'
          }
        },
        {
          id: 2,
          title: 'Business and Culture ethics',
          icon: '/icons/culture-icon.svg',
          content: {
            heading: 'Business and Culture ethics',
            points: [
              'Evaluates communication in professional environments.',
              'Includes respect for cultural diversity and regional standards.'
            ],
            subtitle: 'Business readiness focus',
            description: 'Ensuring employees communicate appropriately across cultures.'
          }
        },
        {
          id: 3,
          title: 'Scenario Based Assessment',
          icon: '/icons/scenario-icon.svg',
          content: {
            heading: 'Scenario Based Assessment',
            points: [
              'Simulates real-world situations.',
              'Tests problem-solving and decision-making using language.'
            ],
            subtitle: 'Real-life evaluation',
            description: 'Revealing how language is applied in practical cases.'
          }
        },
        {
          id: 4,
          title: 'Domain based Assessment',
          icon: '/icons/domain-icon.svg',
          content: {
            heading: 'Domain based Assessment',
            points: [
              'Assessment tailored to industry-specific vocabulary.',
              'Covers technical and professional jargon usage.'
            ],
            subtitle: 'Precision testing',
            description: 'Ensure language matches your domain’s context.'
          }
        }
      ];
      
      const [selected, setSelected] = useState(cardData[0]);
      
  return (
    <div className={styles.assessmentSection}>
      <div className={styles.leftColumn}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`${styles.card} ${selected.id === card.id ? styles.active : ''}`}
            onClick={() => setSelected(card)}
          >
            <img src={card.icon} alt={card.title} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>

      <div className={styles.rightColumn}>
        <h3>{selected.content.heading}</h3>
        <ul>
          {selected.content.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <p className={styles.subtitle}>{selected.content.subtitle}</p>
        <p className={styles.subtext}>{selected.content.description}</p>
      </div>
    </div>

  )
}

export default NewGraph
