import React, { useState } from 'react'
import Reading from './PracticePage/Reading';
import Writing from './PracticePage/Writing';
import Speaking from './PracticePage/Speaking';
import Listening from './PracticePage/Listening';
import FinalSubmission from './PracticePage/FinalSubmission';
import CompletionPage from './PracticePage/CompletionPage';


function Assessment() {
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


export default Assessment;
