export default function DetailsAboutMe({heading , children}){
    return(
        <section className="container col gap-5 ms-0 ps-0 text-start "style={{ fontFamily: '"Roboto", sans-serif', marginBottom:'15px' }}>
         <div className="row text-start">
          <p className="h1 text-start ps-0 ms-0" >{heading}</p>
         </div>
         <div className="row text-start">
          
          {children}
          
         </div>
        </section>
    )
}