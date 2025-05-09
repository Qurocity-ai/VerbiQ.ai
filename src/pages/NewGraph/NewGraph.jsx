import React, { useState }  from 'react'
import styles from './NewGraph.module.css';

function NewGraph() {
    const cardData = [
        {
          id: 1,
          title: 'Assessment by a Native Speaker',
          icon: '/assets/Graph1.png',
          content: {
            heading: 'Assessment by a Native Speaker',
            points: [
              'Responses are reviewed by certified native linguists for real-world accuracy, tone, and regional nuance.',
              'Ensures evaluation goes beyond textbook correctness, capturing natural fluency and cultural context.'
            ]

        }
        },
        {
          id: 2,
          title: 'Business and Culture ethics',
          icon: '/assets/Graph2.png',
          content: {
            heading: 'Business and Culture ethics',
            points: [
"Candidates are assessed on communication norms, decision-making, and situational etiquette in cross-cultural workplaces.",
"Scenarios reflect professional behavior, hierarchy awareness, and sensitivity to global workplace ethics."
            ]
        
          }
        },
        {
          id: 3,
          title: 'Scenario Based Assessment',
          icon: '/assets/Graph3.png',
          content: {
            heading: 'Scenario Based Assessment',
            points: [
"Real-life workplace situations test a candidate’s ability to respond under pressure and with professionalism.",
"Evaluates practical communication skills across tasks like conflict resolution, reporting, and feedback delivery."

                
            ],
           }},
        {
          id: 4,
          title: 'Domain based Assessment',
          icon: '/assets/Graph4.png',
          content: {
            heading: 'Domain based Assessment',
            points: [
 "Tailored questions reflect specific industry jargon and client-facing situations (e.g., tech support, finance, healthcare).",
"Tests both linguistic accuracy and domain familiarity to ensure job readiness from day one."

            ],
              }}
      ]
      
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
        <hr className={styles.hr} />
<p className={styles.subtitle}>Assessments personalized for you</p>
<p className={styles.subtext}>
  Tailored evaluations that align with your unique hiring needs and cultural expectations
</p>

      </div>
    </div>

  )
}

export default NewGraph
