import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="./Favicon.png" alt = "logo" width="70px"></img>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          <a className="nav-link" href="#">Remeras</a>
          <a className="nav-link" href="#">Tazas</a>
          <a className="nav-link disabled">Disabled</a>
        </div>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar;