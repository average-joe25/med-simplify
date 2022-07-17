import React from "react"
function getyear(){
    const year = new Date().getFullYear();
    return year;
}
function Footer(){
    return (<section id="footer">
<footer className="page-footer font-small cyan darken-3">
  <div className="container">
    <div className="row">
      <div className="col-md-12 py-5">
        <div className="mb-5 flex-center">
          <a className="li-ic" href="https://www.linkedin.com/in/abhishek-kumar-singh-718679214/">
            <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="li-ic" href="https://github.com/average-joe25">
            <i className="fab fa-brands fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="li-ic" href="https://www.linkedin.com/in/abhishek-kumar-singh-718679214/">
           <i className="fab fa-brands fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a className="li-ic" href="mailto:abishekkrsingh369@gmail.com">
           <i className="fab fa-brands fa-google fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
        </div>
      </div>

    </div>
  </div>
  <div className="footer-copyright text-center py-1"><p>©  {getyear()} Copyrighted By Abhishek Kumar Singh</p>
  </div>
</footer>
</section>);
}
export default Footer;