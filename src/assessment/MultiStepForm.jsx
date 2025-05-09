import React, { useState } from 'react'
import Reading from './PracticePage/Reading.jsx';
import Writing from './PracticePage/Writing.jsx';
import Speaking from './PracticePage/Speaking.jsx';
import Listening from './PracticePage/Listening.jsx';
import FinalSubmission from './PracticePage/FinalSubmission.jsx';
import CompletionPage from './PracticePage/CompletionPage.jsx';
import Instructions from './Instructions/Instructions .jsx';
import ErrorCorrection from './ErrorCorrection/ErrorCorrection.jsx';
import Comprehension from './Comprehension/Comprehension.jsx';
import ClozeQuestion from './ClozeQuestion/ClozeQuestion.jsx';
import GrammarAndEfficacy from './GrammarAndEfficacy/GrammarAndEfficacy.jsx.jsx';
import SignIn from './signInpage/SignIn.jsx';
import CandidatureForm from './candidateDetailspage/candidateDetails.jsx';
import CandidatureDetailsForm from './candidateDetails2/candidateDetails2.jsx';
import AssessmentButton from './VerbiqAssessmentButton/AssessmentButton.jsx';


function MultiStepForm() {
  const [step, setStep] = useState(0);

  const handleNextStep = () => {
    if (step < 14) setStep((prev) => prev + 1);
  };

  const steps = [
    <SignIn onSubmit={handleNextStep}/>,
    <CandidatureForm onSubmit={handleNextStep}/>,
    <CandidatureDetailsForm onSubmit={handleNextStep}/>,
    <AssessmentButton onSubmit={handleNextStep}/>,
    <Instructions onSubmit={handleNextStep}/>,
    <GrammarAndEfficacy onSubmit={handleNextStep}/>,
    <ClozeQuestion onSubmit={handleNextStep}/>,
     <Comprehension onSubmit={handleNextStep}/>,
    <ErrorCorrection onSubmit={handleNextStep}/>,
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
