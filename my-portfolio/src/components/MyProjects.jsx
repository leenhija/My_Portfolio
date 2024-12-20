import Project from "./Project";
import rapidly from "../assets/rapidly.png";
import eventWebsite from "../assets/eventWebsite.png";
import food_store from "../assets/food.jpg";
import managmentProject from '../assets/project_management.png'

import Carousel from 'react-bootstrap/Carousel';
import 'aos/dist/aos.css'; 
export default function MyProjects() {

  return (
    <section id="projects" className="container animateitem grid col d-flex flex-column justify-content-center mb-5" >
      <div className='row  gap-5 pb-4'>
            <h1 style={{fontFamily:'"Roboto" , sans-serif'}}>My Projects</h1>
            </div>
      <div  className="container grid row gap-4 d-flex flex-row justify-content-center mb-5" style={{maxWidth:'1300px'}}>
      
      <Project image={rapidly} title="Rapidly (Exam Generator)" date="2024" github="https://github.com/leenhija/Graduation_project" >
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}>
          1. Implemented user-friendly interfaces and functionalities using
          Vue.js.
        </p>
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          2. Collaborated with backend developers to integrate APIs and manage
          data flow.
        </p>
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          3. Ensure seamless user experience by coordinating frontend and
          backend systems.
        </p>
      </Project>
      <Project image={eventWebsite} title="Events website" date="2024" github="https://github.com/leenhija/Practicing-React-Router">
        <p className="ps-3 pe-3 " style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          1. Developed an event management website with features for user login,
          signup, event creation, and event discovery.
        </p>
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          2.Integrated Redux for managing global state and handling API requests
          efficiently across the application.
        </p>
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          3. Utilized React Router DOM for seamless routing and navigation
          between different pages.
        </p>
        {/* <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          4. Strengthened skills in React routing, state management, and
          real-world application architecture.
        </p> */}
      </Project>
      <Project
        image={food_store}
        title="Store Application"
        date="2024"
        github="https://github.com/leenhija/Store-Application.git"
      >
         <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          1. Developed a dynamic store application using React for product display and order placement.
        </p>
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          2. Implemented API fetching to retrieve and display products and manage order processing.
        </p>
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          3. Utilized Context API to manage global state. 
        </p>
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          4. Applied useEffect hook for handling side effects, such as data fetching and managing 
          component lifecycle events. 
        </p>
      </Project>
   
      <Project image={managmentProject} title="Project Management" date="2024" github="https://github.com/leenhija/Project-Managment.git">
      <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          1. Implemented a client-side web application using React.js. 
        </p>
        <p className="ps-3 pe-3" style={{ fontFamily:'"Montserrat", serif',fontSize:'14px'}}>
          2. In order to address the issue of prop drilling , I implemented a state management solution 
          using the Context API. 
        </p>
        
      </Project>
      </div>
    </section>
  );
}
