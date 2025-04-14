import React, { useState }  from 'react'
import styles from './ServicesContractual.module.css'

export default function ServicesContractual() {
    const serviceData  = [
        {
          id: 1,
          icon: '/assets/globalPool.png',
          title: 'Global pool of linguistic experts',
          subtext: 'Network across 20+ languages and dialects',
          details: [ 
            { heading: 'Content & Editorial Talent', items: [
                'Multilingual Writers & Editors',
                'Copywriters',
                'Instructional Writers',
                'Subtitlers & Captioners'
              ]
            },
            { heading: 'Interpretation & Translation Experts', items: [
                'Professional Interpreters',
                'Certified Translators',
                'Localization and Transcription Experts'
              ]
            },
            { heading: 'AI Model Training & Linguistic Annotation', items: [
                'Speech & Text Annotators',
                'Transcribers',
                'Linguistic Auditors',
                'Sentiment Analysts'
              ]
            },
               
      ],
        },
        {
          id: 2,
          icon: '/assets/end-to-end.png',
          title: 'End-to-end hiring & onboarding',
          subtext: 'From sourcing to seamless deployment',
          detailsTitle: 'End-to-End Hiring & Onboarding',
          details: [
            'Role Scoping & Requirement Mapping',
            'Language & Cultural Assessments',
            'Domain-Specific Screening',
            'Interview Scheduling & Coordination',
            'Payroll',
          ],
        },
        {
          id: 3,
          icon: '/assets/flexible-hiring.png',
          title: 'Flexible hiring models',
          subtext: 'Contractual, freelance, and project-based options',
          detailsTitle: 'Flexible Hiring Models',
          details: [
            'Contract-Based Engagements',
            'Part-Time & Full-Time Options',
            'On-Demand Talent Sourcing',
            'Quick Turnaround Hiring',
            'Scalable Team Extensions',
          ],
        },
        {
          id: 4,
          icon: '/assets/quality-driven.png',
          title: 'Quality-driven, Ready profiles',
          subtext: 'Language + domain proficiency assessments',
          detailsTitle: '',
          details: [
            'Assessed for Language & Communication Skills',
            'Domain-Specific Expertise',
            'Cultural & Contextual Fit',
            'Consistent Performance',
            'Ready-to-Deploy Talent Across Roles',
            'Industry-Specific Assessors',
      
          ],
        },
      ];
      
        const [activeId, setActiveId] = useState(2); // default active

        const activeContent = serviceData.find(service => service.id === activeId);

      
      
        return (    <div className={styles.sectionContainer}>
            <div className={styles.leftColumn}>
              {serviceData.map(item => (
                <div
                  key={item.id}
                  className={`${styles.serviceCard} ${item.id === activeId ? styles.active : ''}`}
                  onMouseEnter={() => setActiveId(item.id)}
                >
                  <img src={item.icon} alt={item.title} className={styles.icon} />
                  <div className={styles.textBlock}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.subtitle}>{item.subtext}</div>
                  </div>
                </div>
              ))}
            </div>
      
            <div className={styles.rightColumn}>
              <div className={styles.contentTitle}>{activeContent.title}</div>
              {Array.isArray(activeContent.details) && activeContent.details[0]?.items ? (
  activeContent.details.map((group, i) => (
    <div key={i}>
      <h4 className={styles.groupHeading}>{group.heading}</h4>
      <ul className={styles.detailsList}>
        {group.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    </div>
  ))
) : (
  <ul className={styles.detailsList}>
    {activeContent.details.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
)}

            </div>



          </div>
          

        );
      

      }
      
