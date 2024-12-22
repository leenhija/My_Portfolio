import Experience from "./Experience";
import Rhino from '../assets/rhino_logo.png'
import Alrajaa from '../assets/alrajaa_logo5.png'
export default function MyExperience() {
  return (
    <section id="Experience" className="container appearAnimation grid col mt-5 gap-5 d-flex flex-column justify-content-center mb-5">
       <div className=' row  gap-5'>
            <h1 style={{fontFamily:'"Rubik" , serif'}}>Experience</h1>
            </div>
      <div
        className=" col d-flex flex-column align-items-start justify-content-start"
        style={{height:'500px'}}
        
      >
        <Experience image={Rhino} title="Intern at RhinoSoft Company Amman -Jordan, March 2024-June 2024 ">
        <p style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}>Gained comprehensive understanding of web development processes.</p>
        <p style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}>Learned how to design and develop RESTful APIs using Express.js. </p>
        <p style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}>Mastered front-end development fundamentals: HTML, CSS and JavaScript.</p>
        <p style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}>Trained in Vue.js, enhancing skills in a modern JavaScript framework.</p>
        </Experience>
      </div>
      <div
       className=" col d-flex flex-column align-items-end "
       style={{height:'500px'}}
       >
        <Experience image={Alrajaa} title="Intern at The Hope International Company Remote, July 2023-Sep 2023 ">
           <p style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}>learned user experience design fundamentals and user interface design essentials. </p>
           <p style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}>Gained hands-on experience in creating designs for web and mobile projects using Figma. </p>
          <p style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}> Developed interactive prototype using Figma.</p>
          <p style={{ fontFamily:'"Montserrat", serif' , fontSize:'14px'}}>Conducted user research and usability testing to create user-centered designs and improve design outcomes.</p>

        </Experience>
      </div>
    </section>
  );
}
