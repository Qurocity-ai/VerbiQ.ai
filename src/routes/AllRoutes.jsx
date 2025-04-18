import { Routes, Route } from "react-router-dom";
import Aboutus from "../pages/Aboutus/Aboutus";
import Resources from "../pages/Resources/Resources";
import NativeHiringSupport from "../pages/Solutions/NativeHiringSupport/NativeHiringSupport";
import ProjectBasedHiring from "../pages/Solutions/Contractual&ProjectbasedHiring/ProjectBasedHiring";
import Home from "../pages/Home/Home";
import CenterofExce from "../pages/CenterofExce/CenterofExce";
import FullHiring from "../pages/Solutions/FullHiring/FullHiring";
import LangaugeAssesment from "../pages/Solutions/LangaugeAssesment/LangaugeAssesment";
import Global from "../pages/Resources/Global/Global";
import ContractualProject from "../pages/Solutions/ContractualProjectBasedSupport/ContractualProject";

import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";
import BlogListPage from "../pages/Blog/BlogListPage";
import BlogDetailPage from "../pages/Blog/BlogDetailPage";
import Details from "../pages/CenterofExce/Details";
export default function ALLRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/ceo" element={<CenterofExce />}></Route>
      <Route path="/aboutUs" element={<Aboutus />}></Route>
      {/* <Route path="/resources" element={<UnderConstruction/>}></Route> */}
      {/* Support Page Routing  */}
      <Route path="/globalhiring" element={<NativeHiringSupport />}></Route>
      <Route path="/language" element={<LangaugeAssesment />}></Route>
      ContractualProject
      <Route path="/contractual" element={<ContractualProject />}></Route>
      
      <Route path="/fulltime" element={<FullHiring />}></Route>
      {/* Resources  */}
      <Route path="/global" element={<Global />}></Route>
      <Route path="/blog" element={<BlogListPage />}></Route>
      <Route path="/blogs/:id" element={<BlogDetailPage />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}
