
/*import styles from './candidateDetails2.module.css';
import { useNavigate } from 'react-router-dom';

const CandidatureDetailsForm = () => {
    const navigate = useNavigate();

    const handleContinue = () => {
        // Navigate to the next step/page
        navigate('/form2'); // Change this to your desired route
      };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Candidature Details</h2>
      <div className={styles.grid}>
        <input placeholder="1 Year" className={styles.input} />
        <input placeholder="Pune" className={styles.input} />
        <input placeholder="Remote" className={styles.input} />
        <input placeholder="Voice & Non-Voice" className={styles.input} />
        <input placeholder="N.A." className={styles.input} />
        <input placeholder="N.A." className={styles.input} />
        <input placeholder="Kannada, Marathi and Hindi" className={styles.input} />
        <input placeholder="N.A." className={styles.input} />
      </div>
      <button className={styles.button} onClick={() => navigate('/assessmentbutton')}>Save & Continue</button>
    </div>
  );
};

export default  CandidatureDetailsForm;*/


import styles from './candidateDetails2.module.css';
import { useNavigate } from 'react-router-dom';

const CandidatureDetailsForm = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className={styles.fullLine}></div>
        <div className={styles.pageBackground}>
        <div className={styles.container}>
            <h2 className={styles.title}>Candidature Details</h2>
            <div className={styles.separator}></div>
            <div className={styles.grid}>
                <div className={styles.field}>
                    <label>Experience (in years)</label>
                    <input placeholder="1 Year" className={styles.input} />
                </div>
                <div className={styles.field}>
                    <label>Current Location</label>
                    <input placeholder="Pune" className={styles.input} />
                </div>
                <div className={styles.field}>
                    <label>Process Location</label>
                    <input placeholder="Remote" className={styles.input} />
                </div>
                <div className={styles.field}>
                    <label>Role Type</label>
                    <input placeholder="Voice & Non-Voice" className={styles.input} />
                </div>
                <div className={styles.field}>
                    <label>Third Party assessment (if any)</label>
                    <input placeholder="N.A." className={styles.input} />
                </div>
                <div className={styles.field}>
                    <label>Score in third party assessment</label>
                    <input placeholder="N.A." className={styles.input} />
                </div>
                <div className={styles.field}>
                    <label>Regional languages (if any)</label>
                    <input placeholder="Kannada, Marathi and Hindi" className={styles.input} />
                </div>
                <div className={styles.field}>
                    <label>Foreign languages (if any)</label>
                    <input placeholder="N.A." className={styles.input} />
                </div>
            </div>
            <button className={styles.button} onClick={() => navigate('/assessmentbutton')}>Save & Continue</button>
        </div>
       </div>
       </>
    );
};

export default CandidatureDetailsForm;

