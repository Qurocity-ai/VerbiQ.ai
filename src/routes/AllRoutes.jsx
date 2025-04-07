import { Routes,Route } from "react-router-dom";
import Navbar from "../componants/Navbar/Navbar";
import Aboutus from "../pages/Aboutus/Aboutus";
import Resources from "../pages/Resources/Resources";
import COE from "../pages/COE/COE";
import NativeHiringSupport from "../pages/Solutions/NativeHiringSupport/NativeHiringSupport";
import LanguageAssessments from "../pages/Solutions/Language Assessments/LanguageAssessments";
import ContractualProject from "../pages/Solutions/ContractualProjectBasedSupport/ContractualProject";
import FullTimeHiringSupport from "../pages/Solutions/FullTimeHiringSupport/FullTimeHiringSupport";
import Home from "../pages/Home/Home";
export default function ALLRoutes() {
    return (
      
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/ceo" element={<COE/>}></Route>
<Route path="/aboutUs" element={<Aboutus/>}></Route>
<Route path="/resources" element={<Resources/>}></Route>
{/* Support Page Routing  */}
<Route path="/native" element={<NativeHiringSupport/>}></Route>
<Route path="/language" element={<LanguageAssessments/>}></Route>
<Route path="/contractual" element={<ContractualProject/>}></Route>
<Route path="/fulltime" element={<FullTimeHiringSupport/>}></Route>


</Routes>
)}
