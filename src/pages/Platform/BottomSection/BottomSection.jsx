import React from 'react'
import styles from "./BottomSection.module.css";

export default function BottomSection() {
  return (
     <div className={styles.container}>
              {/* Scrollable Image Section */}
                    <div className={styles.verticalScrollBox}>
        <img
          src="/assets/PlatformImage.png"
          alt="Platform"
          className={styles.standingImage}
        />
      </div>




      {/* Text Section */}
      <div className={styles.textSection}>
        <h2 className={styles.heading}>How VerbiQ Maps You to the Right Role</h2>

        <div className={styles.columns}>
                {/* Left Column */}
          <div className={styles.column}>
          <div className={styles.block}>
            <h3>Skill & Proficiency Matching</h3>
            <li>
              We analyze your verified language scores (grammar, fluency,
              vocabulary, cultural fit) alongside your self‑declared skills to
              pinpoint roles where you’ll excel.
            </li>
          </div>

          <div className={styles.block}>
            <h3>Role‑Specific Filters</h3>
            <li>
              Our smart engine weighs your domain expertise—AI training,
              content creation, SAP support—and surfaces jobs that align with
              both your language and technical strengths.
            </li>
          </div>
          </div>
        

              <div className={styles.column}>

          <div className={styles.block}>
            <h3>Cost & Value Optimization</h3>
            <li>
              By factoring in your expected rates and market benchmarks, VerbiQ
              recommends opportunities that maximize your earnings while staying
              competitive.
            </li>
          </div>

          <div className={styles.block}>
            <h3>Real-Time Shortlisting</h3>
            <li>
              Once matched, hiring managers see your profile within minutes.
              Top candidates receive interview invites in under 24 hours, so
              you land roles faster.
            </li>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}
