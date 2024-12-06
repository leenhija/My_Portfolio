import my_photo from "../assets/my_photo2.jpg";
import Button from 'react-bootstrap/Button';
const pdf_url = "http://localhost:5173/Leen_Abo_AlHija.pdf";

export default function InfoCard() {
  const downloadCV = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <section
      className="row container d-flex  gap-0 p-3 text-start"
      style={{ fontFamily: '"Roboto", sans-serif' }}
    >
        <div className="col">
        <img
        src={my_photo}
        style={{ maxWidth: "250px", maxHeight: "380px" }}
        alt="photo of me "
        className="rounded-3"
      />
        </div>
      
      <div className="d-flex flex-column col column-gap-5 text-start">
       
        <div className="d-flex-col text-start pt-2">
        <p>
          <strong>Name: </strong>Leen Raed Abo Al-Hija'a
        </p>
        <p>
          <strong>Position: </strong>Front-End Developer
        </p>
        <p>
          <strong>Email: </strong>leenaboalhijaa@gmail.com
        </p>
        <p>
          <strong>Phone Number: </strong>+962779371455
        </p>
        </div>
        <div >
        <Button onClick={()=>downloadCV(pdf_url)} variant="warning" className='mt-4 p-3 rounded-4' style={{boxShadow:'7px 7px rgb(0,0,0,100%)', fontWeight:'500'}}>Download my cv</Button>

        </div>
      </div>
      
    </section>
  );
}
