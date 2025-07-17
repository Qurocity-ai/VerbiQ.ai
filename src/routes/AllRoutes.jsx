// import { Routes, Route } from "react-router-dom";
// import Aboutus from "../pages/Aboutus/Aboutus";
// import Resources from "../pages/Resources/Resources";
// import NativeHiringSupport from "../pages/Solutions/NativeHiringSupport/NativeHiringSupport";
// import ProjectBasedHiring from "../pages/Solutions/Contractual&ProjectbasedHiring/ProjectBasedHiring";
// import Home from "../pages/Home/Home";
// import CenterofExce from "../pages/CenterofExce/CenterofExce";
// import FullHiring from "../pages/Solutions/FullHiring/FullHiring";
// import LangaugeAssesment from "../pages/Solutions/LangaugeAssesment/LangaugeAssesment";
// import Global from "../pages/Resources/Global/Global";
// import ContractualProject from "../pages/Solutions/ContractualProjectBasedSupport/ContractualProject";
// import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";
// import BlogListPage from "../pages/Blog/BlogListPage";
// import BlogDetailPage from "../pages/Blog/BlogDetailPage";
// import Details from "../pages/CenterofExce/Details";
// import Registration from "../pages/Registration/Registration";
// import Message from "../pages/Registration/Message";
// import Dashboard from "../componants/VerbiqPortal/Dashboard/Dashboard";
// import DashBoardRegister from "../pages/Registration/DashboardRegistration/DashBoardRegister";
// import CompanyRegistration from "../pages/Registration/DashboardRegistration/CompanyRegistration";
// import CandidateRegistration from "../pages/Registration/DashboardRegistration/CandidateRegistration";
// import LoginDash from "../pages/Registration/DashboardRegistration/LoginDash";
// import Platform from "../pages/Platform/Platform";
// import Assessment from "../assessment/Assessment";
// import CompanyDashboard from "../componants/VerbiqPortal/CompanyDashboad/CompanyDashboard";
// export default function ALLRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />}></Route>
//       <Route path="/platform" element={<Platform/>}></Route>
//       <Route path="/ceo" element={<CenterofExce />}></Route>
//       <Route path="/aboutUs" element={<Aboutus />}></Route>
//       {/* <Route path="/resources" element={<UnderConstruction/>}></Route> */}
//       {/* Support Page Routing  */}
//       <Route path="/globalhiring" element={<NativeHiringSupport />}></Route>
//       <Route path="/language" element={<LangaugeAssesment />}></Route>
//       ContractualProject
//       <Route path="/contractual" element={<ContractualProject />}></Route>
//       <Route path="/fulltime" element={<FullHiring />}></Route>
//       {/* Resources  */}
//       <Route path="/global" element={<Global />}></Route>
//       <Route path="/blog" element={<BlogListPage />}></Route>
//       <Route path="/blogs/:id" element={<BlogDetailPage />} />
//       <Route path="/details/:id" element={<Details />} />
//       <Route path="/registration" element={<Registration />} />

//       <Route path="/register/*" element={<DashBoardRegister />}>
//         <Route index element={<CandidateRegistration />} />
//         <Route path="company" element={<CompanyRegistration />} />
//         <Route path="candidate" element={<CandidateRegistration />} />
//       </Route>
//       <Route path="/candidatelogin" element={<LoginDash />} />

//       {/* <Route path="/register/companyregistration" element={<CompanyRegistration/>}/>
//       <Route path="/register/candidateregistration" element={<CandidateRegistration/>}/> */}
//       <Route path="/registrationMessage" element={<Message />} />
//       <Route path="/candidatedashboard/*" element={<Dashboard />} />
//       <Route path="/assessment" element={<Assessment />} />
//     <Route path="/companydashboard/*" element={<CompanyDashboard />} />

//     </Routes>

//   );
// }

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
import Registration from "../pages/Registration/Registration";
import Message from "../pages/Registration/Message";
import Dashboard from "../componants/VerbiqPortal/Dashboard/Dashboard";
import DashBoardRegister from "../pages/Registration/DashboardRegistration/DashBoardRegister";
import CompanyRegistration from "../pages/Registration/DashboardRegistration/CompanyRegistration";
import CandidateRegistration from "../pages/Registration/DashboardRegistration/CandidateRegistration";
import LoginDash from "../pages/Registration/DashboardRegistration/LoginDash";
import Platform from "../pages/Platform/Platform";
import Assessment from "../assessment/Assessment";
import CompanyDashboard from "../componants/VerbiqPortal/CompanyDashboad/CompanyDashboard";
import PrivateRoute from "./PrivateRoute";
import JobPostForm from "../pages/Registration/DashboardRegistration/JobsPostForm";
import AdvancePage from "../pages/AdvancePage/AdvancePage";


export default function ALLRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platform" element={<Platform />} />
      <Route path="/ceo" element={<CenterofExce />} />
      <Route path="/aboutUs" element={<Aboutus />} />
      <Route path="/translation" element={<AdvancePage/>}/>

      {/* Solutions */}
      <Route path="/globalhiring" element={<NativeHiringSupport />} />
      <Route path="/language" element={<LangaugeAssesment />} />
      <Route path="/contractual" element={<ContractualProject />} />
      <Route path="/fulltime" element={<FullHiring />} />

      {/* Resources */}
      <Route path="/global" element={<Global />} />
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blogs/:id" element={<BlogDetailPage />} />

      {/* Center of Excellence */}
      <Route path="/details/:id" element={<Details />} />

      {/* Registration & Login */}
      <Route path="/registration" element={<Registration />} />
      <Route path="/registrationMessage" element={<Message />} />
      <Route path="/candidatelogin" element={<LoginDash />} />

      <Route path="/register/*" element={<DashBoardRegister />}>
        <Route index element={<CandidateRegistration />} />
        <Route path="company" element={<CompanyRegistration />} />
        <Route path="candidate" element={<CandidateRegistration />} />
      </Route>

      {/* ✅ Protected Routes */}
      <Route
        path="/candidatedashboard/*"
        element={
          <PrivateRoute requiredRole="Candidate">
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/companydashboard/*"
        element={
          <PrivateRoute requiredRole="Company">
            <CompanyDashboard />
          </PrivateRoute>
        }
      />
     
 


      {/* Public Assessment Page */}
      <Route path="/assessment" element={<Assessment />} />

      {/* {job posting form } */}
      <Route path="/JobPostForm" element={<JobPostForm />} />
    </Routes>
  );
}
