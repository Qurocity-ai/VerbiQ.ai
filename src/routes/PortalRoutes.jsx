import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ExperienceLevel from '../portalpages/ExperienceLevel/ExperienceLevel'
import EntryLevel from '../portalpages/ExperienceLevel/Entrylevel/EntryLevel'
import Intermediate from '../portalpages/ExperienceLevel/Intermediate/Intermediate'
import Expert from '../portalpages/ExperienceLevel/Expert/Expert'
import Language from '../portalpages/Language/Language'
import French from '../portalpages/Language/French/French'
import German from '../portalpages/Language/German/German'
import Czech from '../portalpages/Language/Czech/Czech'
import Spanish from '../portalpages/Language/Spanish/Spanish'
import Italian from '../portalpages/Language/Italian/Italian'
import Mandarin from '../portalpages/Language/Mandarin/Mandarin'
import Korean from '../portalpages/Language/Korean/Korean'
import Japanese from '../portalpages/Language/Japanese/Japanese'
import TypeofEmployement from '../portalpages/TypeofEmployement/TypeofEmployement'
import FreeLancer from '../portalpages/TypeofEmployement/Freelancer/FreeLancer'
import Contractual from '../portalpages/TypeofEmployement/Contractual/Contractual'
import ResetPassword from '../portalpages/ResetPassword/ResetPassword'
import ForgotPassword from '../portalpages/ForgotPassword/ForgotPassword'
import SignIn from '../portalpages/Sign-In/SignIn'
export default function PortalRoutes() {
  return (
    <Routes>
        {/* folder wise routing */}

        {/* TypeofEmployement */}
        <Route path="/typeofemployement" element={<TypeofEmployement/>}/>
        <Route path="/freelancer" element={<FreeLancer/>}/>
        <Route path="/contractual" element={<Contractual/>}/>

        {/* experiencelevel */}
        <Route path="/experiencelevel" element={<ExperienceLevel/>}/>
        <Route path="/entrylevel" element={<EntryLevel/>}/>
        <Route path="/intermediate" element={<Intermediate/>}/>
        <Route path="/expert" element={<Expert/>}/>

        {/* language */}
        <Route path="/language" element={<Language/>}/>
        <Route path="/french" element={<French/>}/>
        <Route path="/german" element={<German/>}/>
        <Route path="/czech" element={<Czech/>}/>
        <Route path="/spanish" element={<Spanish/>}/>
        <Route path="/italian" element={<Italian/>}/>
        <Route path="/mandarin" element={<Mandarin/>}/>
        <Route path="/korean" element={<Korean/>}/>
        <Route path="/japanese" element={<Japanese/>}/>
        {/*portal-navbar*/}

        <Route path='/Sigin-in' element={<SignIn/>}></Route>
        <Route path='/ForgotPassword'element={<ForgotPassword />} > </Route>
        <Route path='/reset-password' element={<ResetPassword/>}></Route>

        
    </Routes>
  )
}
