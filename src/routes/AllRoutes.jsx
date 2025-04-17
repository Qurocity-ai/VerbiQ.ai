import { Routes,Route } from "react-router-dom";
import Aboutus from "../pages/Aboutus/Aboutus";
import Resources from "../pages/Resources/Resources";
import NativeHiringSupport from "../pages/Solutions/NativeHiringSupport/NativeHiringSupport";
import ProjectBasedHiring from "../pages/Solutions/Contractual&ProjectbasedHiring/ProjectBasedHiring";
import Home from "../pages/Home/Home";
import CenterofExce from "../pages/CenterofExce/CenterofExce";
import FullHiring from "../pages/Solutions/FullHiring/FullHiring";
import LangaugeAssesment from "../pages/Solutions/LangaugeAssesment/LangaugeAssesment";
import Global from "../pages/Global/global";

import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";
import BlogListPage from "../pages/Blog/BlogListPage";
import BlogDetailPage from "../pages/Blog/BlogDetailPage";
export default function ALLRoutes() {
    return (
      
<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/ceo" element={<CenterofExce/>}></Route>
<Route path="/aboutUs" element={<Aboutus/>}></Route>
{/* <Route path="/resources" element={<UnderConstruction/>}></Route> */}
{/* Support Page Routing  */}
<Route path="/native" element={<NativeHiringSupport/>}></Route>
<Route path="/language" element={<LangaugeAssesment/>}></Route>
<Route path="/contractual" element={<ProjectBasedHiring/>}></Route>
<Route path="/fulltime" element={<FullHiring/>}></Route>
{/* Resources  */}
<Route path="/global" element={<Global/>}></Route>
<Route path="/blog" element={<BlogListPage/>}></Route>
<Route path='/blogs/:id' element={<BlogDetailPage />} />


</Routes>
)}
