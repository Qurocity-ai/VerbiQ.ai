// import React from 'react';
// import styles from './ForExperts.module.css';



// const ForExperts = () => {
//   return (
//     <div className={styles.wrapper}>
//       <h2 className={styles.title}>For Experts</h2>
//       <p className={styles.subtitle}>Land Your Next Role with AI-Verified Language & Cultural Credentials</p>

//       <div className={styles.content}>
//         <div className={styles.leftSection}>
//           <div className={styles.item}>
//             <img src='./assets/image 228.png' alt="Discover" className={styles.icon} />
//             <div>
//               <h4>Get Discovered</h4>
//               <ul>
//                 <li>Create a profile highlighting your languages, domain expertise & experience</li>
//                 <li>Smart-tags boost visibility to hiring managers</li>
//               </ul>
//             </div>
//           </div>

//           <div className={styles.item}>
//             <img src='./assets/image 229.png' alt="Secure" className={styles.icon} />
//             <div>
//               <h4>Secure the Role</h4>
//               <ul>
//                 <li>Receive interview invites & offers within 24hrs</li>
//                 <li>Choose full-time, project, or freelance engagements</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className={styles.rightSection}>
//           <div className={styles.card}>
//             <ol>
//               <li><strong>Profile Enrichment</strong>
//                 <ul>
//                   <li>Import CV, LinkedIn, portfolios—auto-tag your language skills & industry experience</li>
//                 </ul>
//               </li>
//               <li><strong>Assessment & Certification</strong>
//                 <ul>
//                   <li>360° evaluation: grammar, fluency, vocabulary, business context & culture</li>
//                 </ul>
//               </li>
//               <li><strong>Smart Matching</strong>
//                 <ul>
//                   <li>Role-specific filters: AI training, SAP support, content creation, interpretation</li>
//                 </ul>
//               </li>
//               <li><strong>Seamless Engagement</strong>
//                 <ul>
//                   <li>Built-in contract templates and secure payment processing</li>
//                 </ul>
//               </li>
//             </ol>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForExperts;
import React from 'react';
import styles from './ForExperts.module.css';
import discoverIcon from '/assets/image 228.png';
import secureIcon from '/assets/image 229.png';

const expertFeatures = [
  {
    icon: discoverIcon,
    title: 'Get Discovered',
    points: [
      'Create a profile highlighting your languages, domain expertise & experience',
      'Smart-tags boost visibility to hiring managers',
    ],
  },
  {
    icon: secureIcon,
    title: 'Secure the Role',
    points: [
      'Receive interview invites & offers within 24hrs',
      'Choose full-time, project, or freelance engagements',
    ],
  },
];

const steps = [
  {
    title: 'Profile Enrichment',
    detail: 'Import CV, LinkedIn, portfolios—auto-tag your language skills & industry experience',
  },
  {
    title: 'Assessment & Certification',
    detail: '360° evaluation: grammar, fluency, vocabulary, business context & culture',
  },
  {
    title: 'Smart Matching',
    detail: 'Role-specific filters: AI training, SAP support, content creation, interpretation',
  },
  {
    title: 'Seamless Engagement',
    detail: 'Built-in contract templates and secure payment processing',
  },
];

const ForExperts = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>For Experts 
            <br/>Land Your Next Role with AI-Verified Language & Cultural Credentials</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          {expertFeatures.map((feature, index) => (
            <div className={styles.featureBox} key={index}>
              <img src={feature.icon} alt={feature.title} className={styles.icon} />
              <div>
                <h4 className={styles.title}>{feature.title}</h4>
                <ul>
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.right}>
          <div className={styles.stepGrid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepItem}>
                <h5>{index + 1}. {step.title}</h5>
                <p>{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForExperts;
