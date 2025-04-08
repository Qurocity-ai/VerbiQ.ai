import React, { useEffect, useState } from 'react';
import styles from './Chat.module.css';

const Chat = () => {
  const [step, setStep] = useState(0);

  // Automatically advance steps every 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 4) {
        setStep(prev => prev + 1);
      } else {
        setStep(1); // Restart from step 1
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className={styles.chatWrapper}>
      <div className={styles.chatContainer}>
        
        {/* Step 1 - Bot greeting */}
        {step >= 1 && (
          <div className={`${styles.botMessage} ${styles.fadeIn}`}>
            <div className={styles.avatar}><img src="/assets/R.png" alt="" /></div>
            <div className={styles.messageBox}>
              <p>
                Hi! Welcome to VerbiQ.<br />
                Let’s begin your language proficiency assessment.<br />
                Please introduce yourself in French.
              </p>
            </div>
          </div>
        )}

        {/* Step 2 - User intro + translation */}
        {step >= 2 && (
          <>
            <div className={`${styles.userMessage} ${styles.fadeIn}`}>
              <div className={styles.messageBox}>
                <p>
                  Bonjour ! Je m'appelle Sophie.<br />
                  Je travaille comme gestionnaire de projet dans une entreprise de technologie. 
                  J’aime voyager et lire pendant mon temps libre.
                </p>
              </div>
              <div className={styles.avatar}><img src="/assets/User1.png" alt="" /></div>
            </div>
            <div className={`${styles.translationWrapper} ${styles.fadeIn}`}>
              <p className={styles.translation}>
                Hello! My name is Sophie. I work as a project manager in a tech company.<br />
                I enjoy traveling and reading in my free time.
              </p>
            </div>
          </>
        )}

        {/* Step 3 - Bot scenario */}
        {step >= 3 && (
          <div className={`${styles.botMessage} ${styles.fadeIn}`}>
            <div className={styles.avatar}><img src="/assets/R.png" alt="" /></div>
            <div className={styles.messageBox}>
              <p>
                Now, you’re in a meeting with a French client.<br />
                Respond professionally to this scenario:<br />
                “The client is concerned about project delays and asks for a revised timeline.”
              </p>
            </div>
          </div>
        )}

        {/* Step 4 - User response + translation */}
        {step >= 4 && (
          <>
            <div className={`${styles.userMessage} ${styles.fadeIn}`}>
              <div className={styles.messageBox}>
                <p>
                  Je comprends vos préoccupations.<br />
                  Nous réévaluerons notre calendrier et vous enverrons une mise à jour détaillée d'ici la fin de la semaine.
                </p>
              </div>
              <div className={styles.avatar}><img src="/assets/User1.png" alt="" /></div>
            </div>
            <div className={`${styles.translationWrapper} ${styles.fadeIn}`}>
              <p className={styles.translation}>
                I understand your concerns.<br />
                We will reevaluate our timeline and send you a detailed update by the end of the week.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
