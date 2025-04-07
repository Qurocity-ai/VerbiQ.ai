import { Routes,Route } from "react-router-dom";
import Aboutus from "../pages/Aboutus/Aboutus";
import Resources from "../pages/Resources/Resources";
import NativeHiringSupport from "../pages/Solutions/NativeHiringSupport/NativeHiringSupport";
import LanguageAssessments from "../pages/Solutions/Language Assessments/LanguageAssessments";
import ContractualProject from "../pages/Solutions/ContractualProjectBasedSupport/ContractualProject";
import FullTimeHiringSupport from "../pages/Solutions/FullTimeHiringSupport/FullTimeHiringSupport";
import Home from "../pages/Home/Home";
import CenterofExce from "../pages/CenterofExce/CenterofExce";
export default function ALLRoutes() {
    return (
      
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/ceo" element={<CenterofExce/>}></Route>
<Route path="/aboutUs" element={<Aboutus/>}></Route>
<Route path="/resources" element={<Resources/>}></Route>
{/* Support Page Routing  */}
<Route path="/native" element={<NativeHiringSupport/>}></Route>
<Route path="/language" element={<LanguageAssessments/>}></Route>
<Route path="/contractual" element={<ContractualProject/>}></Route>
<Route path="/fulltime" element={<FullTimeHiringSupport/>}></Route>


</Routes>
)}
