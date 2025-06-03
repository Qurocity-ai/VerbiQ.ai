
import styles from './AssessmentButton.module.css';
// import logo from '../../../public/assets/VerbiQ Logo 5.png';

const AssessmentButton = ({onSubmit}) => {
  return (
    <>
    <div className={styles.fullLine}></div>
    <div className={styles.container}>
            {/* <img src={logo} alt="Verbiw Logo" className={styles.logo} /> */}
            <img src="/assets/VerbiQ Logo 5.png" alt="Logo"  className={styles.logo}/>

      <button onClick={onSubmit} className={styles.button}>Proceed with Assessment</button>
    </div>
    </>
  );
};

export default AssessmentButton;
