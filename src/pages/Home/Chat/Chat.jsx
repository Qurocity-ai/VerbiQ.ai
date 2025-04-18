import React, { useEffect, useState, useRef } from 'react';
import styles from './Chat.module.css';

const Chat = () => {
  const messages = [
    {
      sender: 'bot',
      text: "Hi! Welcome to VerbiQ. Let's begin your language proficiency assessment. Please introduce yourself in French.",
      translation: null
    },
    {
      sender: 'user',
      text: "Bonjour ! Je m'appelle Sophie.\nJe travaille comme gestionnaire de projet dans une entreprise de technologie. J'aime voyager et lire pendant mon temps libre.",
      translation: "Hello! My name is Sophie. I work as a project manager in a tech company.\nI enjoy traveling and reading in my free time."
    },
    {
      sender: 'bot',
      text: "Now, you're in a meeting with a French client.\nRespond professionally to this scenario:\n\"The client is concerned about project delays and asks for a revised timeline.\"",
      translation: null
    },
    {
      sender: 'user',
      text: "Je comprends vos préoccupations.\nNous réévaluerons notre calendrier et vous enverrons une mise à jour détaillée d'ici la fin de la semaine.",
      translation: "I understand your concerns.\nWe will reevaluate our timeline and send you a detailed update by the end \nof the week."
    }
  ];

  const [displayedTexts, setDisplayedTexts] = useState(Array(messages.length).fill(''));
  const [displayedTranslations, setDisplayedTranslations] = useState(Array(messages.length).fill(''));
  const [currentStep, setCurrentStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  const chatRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (chatRef.current) {
      observer.observe(chatRef.current);
    }

    return () => {
      if (chatRef.current) observer.unobserve(chatRef.current);
    };
  }, []);

  useEffect(() => {
    if (!startAnimation || currentStep >= messages.length) return;

    const currentMessage = messages[currentStep];

    if (
      displayedTexts[currentStep].length < currentMessage.text.length ||
      (currentMessage.translation &&
        displayedTranslations[currentStep].length < currentMessage.translation.length)
    ) {
      const timer = setTimeout(() => {
        setDisplayedTexts(prev => {
          const newTexts = [...prev]; //comment
          if (newTexts[currentStep].length < currentMessage.text.length) {
            newTexts[currentStep] = currentMessage.text.substring(0, newTexts[currentStep].length + 1);
          }
          return newTexts;
        });

        setDisplayedTranslations(prev => {
          const newTrans = [...prev];
          if (
            currentMessage.translation &&
            newTrans[currentStep].length < currentMessage.translation.length
          ) {
            newTrans[currentStep] = currentMessage.translation.substring(
              0,
              newTrans[currentStep].length + 1
            );
          }
          return newTrans;
        });
      }, 20);
      return () => clearTimeout(timer);
    } else {
      const moveToNextStep = setTimeout(() => {
        if (currentStep < messages.length - 1) {
          setCurrentStep(prev => prev + 1);
        } else {
          setIsTyping(false);
        }
      }, 250);
      return () => clearTimeout(moveToNextStep);
    }
  }, [startAnimation, currentStep, displayedTexts, displayedTranslations]);

  const renderMessage = (index) => {
    const message = messages[index];
    const isBot = message.sender === 'bot';

    return (
      <React.Fragment key={index}>
        <div className={`${isBot ? styles.botMessage : styles.userMessage} ${styles.fadeIn}`}>
          {isBot && (
            <div style={{ position: 'relative' }}>
              <div className={`${styles.avatarGlow} ${styles.botGlow}`}></div>
              <div className={styles.avatar}>
                <img src="/assets/R.png" alt="Bot" />
              </div>
            </div>
          )}
          <div className={styles.messageBox}>
            <p style={{ whiteSpace: 'pre-line' }}>
              {displayedTexts[index]}
              {displayedTexts[index].length < message.text.length && (
                <span className={styles.cursor}>|</span>
              )}
            </p>
          </div>
          {!isBot && (
            <div style={{ position: 'relative' }}>
              <div className={`${styles.avatarGlow1} ${styles.userGlow}`}></div>
              <div className={styles.avatar}>
                <img src="/assets/User1.png" alt="User" />
              </div>
            </div>
          )}
        </div>

        {message.translation && (
          <div className={`${styles.translationWrapper} ${styles.fadeIn}`}>
            <p className={styles.translation} style={{ whiteSpace: 'pre-line' }}>
              {displayedTranslations[index]}
              {displayedTranslations[index].length < message.translation.length && (
                <span className={styles.cursor}>|</span>
              )}
            </p>
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <div className={styles.chatWrapper} ref={chatRef}>
      <div className={styles.chatContainer}>
        {Array.from({ length: currentStep + 1 }).map((_, index) => renderMessage(index))}
      </div>
    </div>
  );
};

export default Chat;
