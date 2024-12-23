import DetailsAboutMe from "./DetailsAboutMe";
import InfoCard from "./InfoCard";
export default function AboutMe() {
  return (
    
    <section
      id="about_me"
      className="grid container gap-5 row mt-5 mb-5 bg-primary pt-5 rounded-3"
      style={{ boxShadow: "7px 7px rgb(0,0,0,25%)" }}
    >
      <div className=" col d-flex-col gap-3">
        <InfoCard />
        {/* <SkillsInRatio/> */}
      </div>
      <div className="col grid column-gap-5">
        <DetailsAboutMe heading="About Me:" className="row">
         
            Recent graduate with a BSc in Computer Information Systems and a
            three-months internship experience. Seeking a Junior Front-End
            Developer position where I can apply my experience in Front End
            Development with skills in HTML5, CSS and JavaScript(ES6+).
            Additionally, a comprehensive knowledge of JavaScript frameworks
            (React.js, Vue.js, Node.js, Express.js) and experience in building
            scalable web applications. A dedicated worker aiming to help achieve
            company goals and take on more responsibility as quickly as
            possible.
        </DetailsAboutMe>
        <DetailsAboutMe heading="Education:" className="row">
            Bachelor of Computer Information Systems Jordan University of
            Science and Technology || Irbid, Jordan, July 2024
            <p className="text-start ps-0 ms-0">GPA: Very Good </p>
        </DetailsAboutMe>
      </div>
    </section>
   

  );
}


