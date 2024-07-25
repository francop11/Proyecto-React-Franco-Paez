import "./Navbar.css";
import CartWidget from "../CarWidget/CartWidget.jsx";

const Navbar=()=>{
    return(
        <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">HOUSE GAMER</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CELULARES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">COMPUTADORAS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONSOLAS</a>
        </li>
      </ul>
      <span className="navbar-text">
        <CartWidget/>
      </span>
    </div>
  </div>
</nav>
      
    </header>

    )
}

export default Navbar