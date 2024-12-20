import my_photo from "../assets/my_photo2.jpg";
import Button from "react-bootstrap/Button";
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
        <div
          className="d-flex-col text-start pt-2"
          style={{ borderBottom: "1px solid black" }}
        >
          <p>
            <strong>Full Name: </strong>Leen Raed Abo Al-Hija'a
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
        <div className="d-flex flex-column justify-content-center align-items-center pt-3">
          <p style={{ fontFamily: '"Rubik" , serif' }}>
            Feel free to Explore my CV
          </p>
          <Button
            onClick={() => downloadCV(pdf_url)}
            variant="warning"
            className="mt-1 ps-4 pe-4 pt-2 pb-2 rounded-4"
            style={{
              border: "none",
               fontWeight: "500",
               backgroundColor:'#F8CF4B',
               boxShadow: "0px 4px 4px rgb(0,0,0,25%)",

               fontWeight:'400',
               fontFamily:'"Rubik" , serif'
            }}
          >
            Download
          </Button>
        </div>
      </div>
    </section>
  );
}
