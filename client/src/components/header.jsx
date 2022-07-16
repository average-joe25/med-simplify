import React from "react";
function Header(){
    return <section className="header">
        <nav className="navbar navbar-expand-lg navbar-dark heading">
  <a className="navbar-brand nav-element title" href="/">Med-Simplify</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto nav-element">
      <li className="nav-item active ">
        <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#footer">contact us</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#">about </a>
      </li>
    </ul>
  </div>
</nav>
    </section>
}
export default Header;