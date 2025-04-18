// import React from 'react';
// import  './TeamSection.css';

// const teamMembers = [
//   {
//     name: 'Shubham Paypare',
//     role: 'Deputy General Manager',
//     department: 'Marketing & Growth',
//     branch:'Marketing & Growth',
//   },
//   {
//     name: 'Aditya Muthane',
//     role: 'Founding Team Member',
//     department: 'Marketing & Growth',
//     branch:'Marketing & Growth',
//   },
//   {
//     name: 'Laxmi Yadav',
//     role: 'National Account Manager',
//     department: 'Sales and Marketing',
//     branch:'Marketing & Growth',

//   }
// ];

// const founders = [
//   {
//     name: 'Sheetal Ramkumar',
//     title: 'Founder and CEO',
//     description: [
//     '20+ years in education with leadership accolades among India’s top women in business',
//       'Academic credentials from Symbiosis, MICA & IIT Delhi',
//       'Visionary driving VerbiQ’s platform growth and strategic direction',
//     ],
//     img: '/assets/Team1.png', // replace with your image path
//   },
//   {
//     name: 'Ramkumar Kayarat',
//     title: 'Founder and CHRO',
//     description: [
//       '20+ years in Telecom with a focus on people, culture, and learning',
//       'Holds degrees from IIM Ahmedabad & XLRI Jamshedpur',
//       'Championing a collaborative, high-performance work culture'
//     ],
//     img: '/assets/Team2.png', // replace with your image path
//   },
//   {
//     name: 'Ramkumar Kayarat',
//     title: 'Founder and CHRO',
//     description: [
//       '20+ years in Telecom with a focus on people, culture, and learning',
//       'Holds degrees from IIM Ahmedabad & XLRI Jamshedpur',
//       'Championing a collaborative, high-performance work culture'
//     ],
//     img: '/assets/Team2.png', // replace with your image path
//   }
// ];

// function TeamSection() {
//   return (
//     <section className='team-section'>
//       <h2 className='text-[#00046C] text-xl'>Meet Our Team</h2>
//       <div className="team-cards md:text-right text-center">
//         {teamMembers.map((member, idx) => (
//           <div className="card  text-[#686868]" key={idx}>
//             <h4 className='text-[#000949] font-bold' >{member.name}</h4>
//             <p>{member.role}</p>
//             <p>{member.department}</p>
//             <hr class="w-70 h-px  bg-[#686868] border-0"></hr>
//             <p>{member.branch}</p>
//           </div>
//         ))}
//       </div>

//       <div className="founder-cards">
//         {founders.map((founder, idx) => (
//           <div className="founder-card " key={idx}>
//             <img src={founder.img} alt={founder.name} />
//             <div className="founder-info">
//               <h4 className='font-bold'>{founder.name} | <span>{founder.title}</span></h4>
//               <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
//               <ul >
//                 {founder.description.map((point, i) => (
//                   <li className='text-[#00046C]' key={i}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default TeamSection;
import React from 'react';
import styles from './TeamSection.module.css';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Shubham Paypare',
    role: 'Deputy General Manager',
    department: 'Digital Marketing & Growth, Development',
    
  },
  {
    name: 'Aditya Muthane',
    role: 'Founding Team Member',
    department: 'Product, Pre-Sales, Business Analytics, Strategy',
   
  },
  {
    name: 'Laxmi Yadav',
    role: 'National Account Manager',
    department: 'Sales and Marketing, Client Relationships, Strategic Partnerships, Account Growth',
    
  }
];

const founders = [
  {
    name: 'Sheetal Ramkumar',
    title: 'Founder and CEO',
    description: [
      '20+ years in education with leadership accolades among India’s top women in business',
      'Academic credentials from Symbiosis, MICA & IIT Delhi',
      'Visionary driving VerbiQ’s platform growth and strategic direction',
    ],
    img: '/assets/Team1.png',
  },
  {
    name: 'Ramkumar Kayarat',
    title: 'Founder and CHRO',
    description: [
      '20+ years in Telecom with a focus on people, culture, and learning',
      'Holds degrees from IIM Ahmedabad & XLRI Jamshedpur',
      'Championing a collaborative, high-performance work culture'
    ],
    img: '/assets/Team2.png',
  },
  {
    name: 'Rahul Singh ',
    title: 'Founder and  COO',
    description: [
      '20+ years in Telecom with a focus on people, culture, and learning',
      'Holds degrees from IIM Ahmedabad & XLRI Jamshedpur',
      'Championing a collaborative, high-performance work culture'
    ],
    img: '/assets/Team2.png',
  }
];
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const founderContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const founderCardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <h2 className='text-[#00046C] text-xl'>Meet Our Team</h2>
      {/* <div className={`md:text-right text-center ${styles.teamCards}`}>
        {teamMembers.map((member, idx) => (
          <div className={`text-[#686868] ${styles.card}`} key={idx}>
            <h4 className='text-[#000949] font-bold'>{member.name}</h4>
            <p>{member.role}</p>
            <p>{member.department}</p>
            <hr className="w-70 h-px bg-[#686868] border-0" />
            <p>{member.branch}</p>
          </div>
        ))}
      </div> */}
      <motion.div
  className={`md:text-right text-center ${styles.teamCards}`}
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  // viewport={{ once: true }}
  viewport={{ once: false, amount: 0.2 }}
>
  {teamMembers.map((member, idx) => (
    <motion.div
      className={`text-[#686868] ${styles.card}`}
      key={idx}
      variants={cardVariants}
    >
    
      <h4 className="text-[#000949] font-bold">{member.name}</h4>
      <p >{member.role}</p>
      <br></br>
      <hr className="w-70 h-px bg-[#686868] border-0" />
      <p >{member.department}</p>
      
    </motion.div>
  ))}
</motion.div>


      {/* <div className={styles.founderCards}>
        {founders.map((founder, idx) => (
          <div className={styles.founderCard} key={idx}>
            <img src={founder.img} alt={founder.name} />
            <div className={styles.founderInfo}>
              <h4 className='font-bold'>
                {founder.name} | <span>{founder.title}</span>
              </h4>
              <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <ul>
                {founder.description.map((point, i) => (
                  <li className='text-[#00046C]' key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div> */}
      <motion.div
  className={styles.founderCards}
  variants={founderContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.2 }} // 👈 triggers every time it enters view
>

  {founders.map((founder, idx) => (
    <motion.div
      className={styles.founderCard}
      key={idx}
      variants={founderCardVariant}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 300 },
      }}
    >
      <img src={founder.img} alt={founder.name} />
      <div className={styles.founderInfo}>
        <h4 className="font-bold">
          {founder.name} | <span>{founder.title}</span>
        </h4>
        <hr className="w-64 h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <ul>
          {founder.description.map((point, i) => (
            <li className="text-[#00046C]" key={i}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  ))}
</motion.div>

    </section>
  );
}

export default TeamSection;
