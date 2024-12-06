import "./App.css";
import AboutMe from "./components/AboutMe";
import MainInformation from "./components/MainInformation";
import MainNavigation from "./components/mainNavigation";
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import MyExperience from "./components/MyExperience";
import ContactMe from "./components/ContactMe";
function App() {
  return (
    <>
      <MainNavigation />
      <MainInformation />
      <AboutMe />
     <MySkills/>
     <MyProjects/>
     <MyExperience/>
     <ContactMe/>
    </>
  );
}

export default App;
