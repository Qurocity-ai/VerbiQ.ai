import React from "react";
import UnderConstruction from "../../UnderConstruction/UnderConstruction";

import styles from "./NativeHiring.module.css";

import culturalIcon from "/assets/cultural.png";
import skillIcon from "/assets/skill.png";
import communicationIcon from "/assets/communication.png";
import { Color } from "ogl";

const NativeHiringSupport = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            <span>Global Hiring Support</span>: Cultivating Authentic Talent
          </h1>
          <p className={styles.paraFirst}>
            We understand that success in global markets demands more than just
            language proficiency, it requires deep cultural insight and
            native-level expertise.
          </p>
        </div>

        <div className={styles.whyNative}>
          <h2>
            <span className={styles.dotHeading}>...</span>
            <span className={styles.mobileHeading}>Why native hiring Matters</span>
          </h2>
       

          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                <img
                  src={culturalIcon}
                  alt="Cultural Accuracy"
                  className={styles.icon}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.middleHeading}>Cultural Accuracy:</h3>
                <p className={styles.middlePara}>
                  Hire talent with native cultural insights to engage diverse
                  markets authentically
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                <img
                  src={skillIcon}
                  alt="Niche Skill Expertise"
                  className={styles.icon}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.middleHeading}>Niche Skill Expertise:</h3>
                <p className={styles.middlePara}>
                  Access specialists with industry-specific language mastery and
                  local dialect proficiency
                </p>
              </div>
            </div>

            <div className={styles.feature}>
              <div className={styles.iconWrapper}>
                <img
                  src={communicationIcon}
                  alt="Authentic Communication"
                  className={styles.icon}
                  style={{height:"180px",width:"180px",objectFit:"contain"}}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.middleHeading}>Authentic Communication:</h3>
                <p className={styles.middlePara}>
                  Sourced candidates exhibit natural accents and speech patterns
                  that automated systems often miss.
                </p>
              </div>
            </div>

            <div className={styles.featureLastDiv}>
              <h3 className={styles.paraLast} >
                We’ll help you secure candidates who not only speak the language
                fluently but also embody the <span className={styles.headingLastSpan}>cultural nuances</span>  and <span className={styles.headingLastSpan}>dialectical variations</span>
                 crucial for authentic communication.
              </h3>
            </div>
          </div>
        </div>

        

        <div className={styles.expanding}>
          <h2 className={styles.expandingHeading} >
            Expanding Opportunities with Native Talent
          </h2>
          <div className={styles.opportunitiesWrapper}>
            <div className={styles.leftColumn}>
              <div className={styles.opportunityBlock}>
                <h4>AI Model Training:</h4>
                <p >
                  Empower your AI with native experts delivering culturally
                  nuanced and linguistically precise training for superior
                  performance
                </p>
              </div>
              <div className={styles.opportunityBlock}>
                <h4>Content Roles:</h4>
                <p>
                  Elevate your brand with content creators and copywriters who
                  craft high-quality, culturally resonant narratives.
                </p>
              </div>
            </div>
            <div className={`${styles.opportunityBlock} ${styles.rightColumn}`}>
              <h4>Technical & Domain-Specific Positions:</h4>
              <p>
                Drive innovation with specialists who blend deep technical
                expertise with native fluency to fuel breakthroughs in IT,
                legal, and finance.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NativeHiringSupport;
