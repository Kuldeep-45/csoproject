import React, { useState,Component} from 'react'
import './App.css';
import Home from "./pages"
import SignIn from "./pages/SignIn"
import Navbar from "./Comp/Nav"
import Sidebar from "./Comp/Sidebar"
import Student from "./pages/Students.js"
import CFour from './CLAss/Index4'
import CEight from './CLAss/Index8'
import CZero from './CLAss/Index0'
import Sport from "./CLAss/CEight"
import Medical from './CLAss/Medical'
import Engineering from './CLAss/Engineering.js'
import Arts from './CLAss/Humanities'
import Commerce from './CLAss/Commerce'
import Phy from './CLAss/Physical'
import IIT from "./EnginerringFolder/IIT"
import NIT from "./EnginerringFolder/NIT"
import BIT from "./EnginerringFolder/BITS"
import Fashion from "./CLAss/Fashion"
import Law from "./CLAss/Law"
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom'
import SignUp from './pages/SignUp';
import Footer from "./Comp/Footer/Index"
import Service from "./Comp/Services/Index"
import FunFact from "./CLAss/FunFacts"
import  Acad8    from "./CLAss/Academics/EightAc"
import  Acad4    from "./CLAss/Academics/FourAc"
import  Acad0    from "./CLAss/Academics/ZeroAc"
import Mental0 from "./CLAss/Mental/Mental0.js"
import Mental4 from "./CLAss/Mental/Mental4.js"
import Mental8 from "./CLAss/Mental/Mental8.js"
import Aiims from "./CLAss/Medical/Aiims"
import Neet from "./CLAss/Medical/Neet"
import Private from "./CLAss/Medical/PrivateM"
import NeetGuide from "./CLAss/Aguide/Neetguide"
import Specialabled from './CLAss/New/Specialabled';
import Sport4 from "./CLAss/Sports/Sports4"
import Sport0 from "./CLAss/Sports/Sports0"
import Phy4 from "./CLAss/PhysicalF/Physical4"
import Phy0 from "./CLAss/PhysicalF/Physical0"
import Food8 from "./CLAss/Food/Food8"
import Food4 from "./CLAss/Food/Food4"
import Food0 from "./CLAss/Food/Food0"
import TopClgEng from "./CLAss/EngFol/Topcollege"
import SpeEng from "./CLAss/EngFol/Speciaz"
import ExaEng from "./CLAss/EngFol/Exams"
import TopClgMed from "./CLAss/MedFol/TopMedC"
import SpeMed from "./CLAss/MedFol/Specialm"
import MedExam from "./CLAss/MedFol/ExaMed"
import IISc from "./CLAss/IISC"
import IISt from "./CLAss/IIST"
const App = () => {
  const [isOpen, setIsopen] = useState(false)
     const toggle = () => {
         setIsopen(!isOpen);
     };
  return (
    <Router>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/service" component={Service}/>
      <Route exact path="/students" component={Student}/>
      <Route exact path="/czero" component={CZero}/>
      <Route exact path="/cfour" component={CFour}/>
      <Route exact path="/ceight" component={CEight} />
      <Route exact path="/ceightsport" component={Sport} />
      <Route exact path="/medical" component={Medical}/>
      <Route exact path="/engineering" component={Engineering} />
      <Route exact path="/arts" component={Arts}/>
      <Route exact path="/commerce" component={Commerce}/>
      <Route exact path="/phy8" component={Phy} />
      <Route exact path="/iits" component={IIT}/>
      <Route exact path="/nits" component={NIT} />
      <Route exact path="/iisc" component={IISc}/>
      <Route exact path="/iist" component={IISt}/>
      <Route exact path="/bits" component={BIT} />
      <Route exact path="/aiims" component={Aiims} />
      <Route exact path="/neet" component={Neet} />
      <Route exact path="/private" component={Private} />
      <Route exact path="/law" component={Law} />
      <Route exact path="/fashion" component={Fashion} />
      <Route exact path="/funfacts" component={FunFact} />
      <Route exact path="/acad8" component={Acad8} />
      <Route exact path="/acad4" component={Acad4} />
      <Route exact path="/acad0" component={Acad0} />
      <Route exact path="/mental8" component={Mental8} />
      <Route exact path="/mental4" component={Mental4} />
      <Route exact path="/mental0" component={Mental0} />
      <Route exact path="/sport4" component={Sport4} />
      <Route exact path="/sport0" component={Sport0} />
      <Route exact path="/phy4" component={Phy4} />
      <Route exact path="/phy0" component={Phy0} />
      <Route exact path="/food8" component={Food8} />
      <Route exact path="/food4" component={Food4} />
      <Route exact path="/food0" component={Food0} />
      <Route exact path="/neetguide" component={NeetGuide} />
      <Route exact path="/abled" component={Specialabled} />
      <Route exact path="/topclgeng" component={TopClgEng} />
      <Route exact path="/speeng" component={SpeEng} />
      <Route exact path="/exaeng" component={ExaEng} />
      <Route exact path="/topclgmed" component={TopClgMed} />
      <Route exact path="/spemed" component={SpeMed} />
      <Route exact path="/examed" component={MedExam} />
  <Redirect  to="/"/>
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
