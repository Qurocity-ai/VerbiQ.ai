import React, { useState } from 'react'
import Reading from './Reading';
import Writing from './Writing';
import Speaking from './Speaking';
import Listening from './Listening';
import FinalSubmission from './FinalSubmission';
import CompletionPage from './CompletionPage';


function MultiStepForm() {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    if (step < 5) setStep((prev) => prev + 1);
  };

  const steps = [
    <Reading onSubmit={handleNextStep} />,
    <Writing onSubmit={handleNextStep} />,
    <Speaking onSubmit={handleNextStep}/>,
    <Listening onSubmit={handleNextStep}/>,
    <FinalSubmission onSubmit={handleNextStep}/>,
    <CompletionPage onSubmit={handleNextStep}/>,
  ];
  return (
    <div>
      {steps[step]}
    </div>
  );
};


export default MultiStepForm;
