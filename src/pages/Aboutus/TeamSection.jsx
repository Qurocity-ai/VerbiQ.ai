
import React from 'react';
import styles from './TeamSection.module.css';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';


const teamMembers = [
  {
    name: 'Shubham Paypare',
    role: 'Deputy General Manager',
    department: 'Digital Marketing & Growth, Development',
    image: '/assets/Shubham.png.jpeg',
    linkedin:'https://www.linkedin.com/in/shubham-paypare/',
  },
  {
    name: 'Aditya Muthane',
    role: 'Founding Team Member',
    department: 'Product, Pre-Sales, Business Analytics, Strategy',
    image: '/assets/Aditya.png.jpeg',
    linkedin:'https://www.linkedin.com/in/adityamuthane/',
  },
  {
    name: 'Laxmi Yadav',
    role: 'National Account Manager',
    department: 'Sales and Marketing, Client Relationships, Strategic Partnerships, Account Growth',
    image: '/assets/laxmi.jpg',
    linkedin:'https://www.linkedin.com/in/laxmi-yadav-33ab56227/',
  },
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
      linkedin:'https://www.linkedin.com/in/sheetalramkumar/',
    },
    {
      name: 'Ramkumar Kayarat',
      title: 'Founder and CHRO',
      description: [
        '20+ years in Telecom with a focus on people, culture, and learning',
        'Holds degrees from IIM Ahmedabad & XLRI Jamshedpur',
        'Championing a collaborative, high-performance work culture',
      ],
      img: '/assets/Team2.png',
      linkedin:'https://www.linkedin.com/in/ram-kumar-kayarat-97952177/',
    },
    {
      name: 'Rahul Singh ',
      title: 'Co-Founder & COO',
      description: [
        'Corporates leader with a focus on operational excellence process efficiency',
        'Expert in business planning and account management',
        'Driving a collaborative, service-focused culture at Recrutory',
      ],
      img: '/assets/image 254.png',
      linkedin:'https://www.linkedin.com/in/raahul-dev-singh-21799b5a/',
    },
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
     <>
      {/* Founders Section FIRST */}
     
      <motion.div
        className={styles.founderCards}
        variants={founderContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {founders.map((founder, idx) => (
          <motion.div
            className={styles.founderCard}
            key={idx}
            variants={founderCardVariant}
            whileHover={{
              scale: 1.03,
              transition: { type: 'spring', stiffness: 300 },
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
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0077b5]  text-xl mt-3 inline-block "
              >
                <FaLinkedin style={{fontSize:"28px", marginLeft:"auto"}} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Members Section SECOND */}
      <section className={styles.teamSection}>
      <h2 className="text-[#00046C] text-xl">Meet Our Team</h2>

      <motion.div
        className={`md:text-right text-center ${styles.teamCards}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {teamMembers.map((member, idx) => (
          <motion.div
            className={`text-[#686868] ${styles.card}`}
            key={idx}
            variants={cardVariants}
          >
            <img src={member.image} alt={member.name} className={styles.image} />
           
            <h4 className="text-[#000949] font-bold">{member.name}</h4>
            <p className="text-[14px]">{member.role}</p>
            <br />
            <hr className="w-70 h-px bg-[#686868] border-0" />
            <p className="text-[13px]">{member.department}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] text-xl mt-3 inline-block"
            >
              <FaLinkedin style={{fontSize:"28px", marginLeft:"250px"}} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
    </>
  );
}
export default TeamSection;

