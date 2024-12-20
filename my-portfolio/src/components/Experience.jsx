export default function Experience({ image, title, children }) {
 
  return (
    <div
      className=" container grid row ps-0 pe-0 rounded-3"
      style={{
        backgroundColor: "#D9D9D9",
        maxWidth: "1000px",
        height:'100%',
        border: "3px #d4d4d8 solid",
        boxShadow: "7px 7px rgb(0,0,0,25%)",
      }}
    >
      <img src={image} className="ps-0 rounded-3" style={{ maxWidth: "300px" , maxHeight:'200px'}}  />
      <div className="grid col text-start lh-sm">
        <h6
          className="fw-bold text-start mt-2"
          style={{ fontFamily: '"Roboto" , sans-serif'}}
        >
          {title}
        </h6>
        {children}
      </div>
    </div>
  );
}
