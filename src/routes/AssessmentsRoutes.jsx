import React from 'react';
import { Routes, Route } from "react-router-dom";
import SignIn from '../assessment/signInpage/SignIn';
import CandidatureForm from '../assessment/candidateDetailspage/candidateDetails';
import CandidatureDetailsForm from "../assessment/candidateDetails2/candidateDetails2";
import AssessmentButton from "../assessment/VerbiqAssessmentButton/AssessmentButton";

export default function AssessmentsRoutes(){
    return(
        <Routes>
      <Route path="/assessment" element={<SignIn />} />
      <Route path="/form" element={<CandidatureForm />} />
      <Route path="/form2" element={<CandidatureDetailsForm />} />
      <Route path="/assessmentbutton" element={<AssessmentButton />} />
        </Routes>
    )
}