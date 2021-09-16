import React from 'react'
import Head from 'next/head'

function Navbar() {
  return (
    <header>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light border-bottom" style={{ backgroundColor: "white" }}>
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCenteredExample" aria-controls="navbarCenteredExample" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
            <div className="container">
              <div className="row">
                <div className="col-md-1" />
                <div className="col-md-4">
                  <a className="navbar-brand" href="#">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" height={30} alt="" loading="lazy" />
                  </a>
                </div>
                <div className="col-md-3">
                  <form className="d-flex input-group w-auto">
                    <input type="search" className="form-control" placeholder="Search" aria-label="Search" />
                  </form>
                </div>
                <div className="col-md-4">
                  <ul className="navbar-nav justify-content-center">
                    {/* Icons */}
                    <li className="nav-item mr-3 mr-lg-0">
                      <a className="nav-link" href="#">
                        <i className="fas fa-home fa-lg text-dark" />
                      </a>
                    </li>
                    <li className="nav-item mr-3 mr-lg-0">
                      <a className="nav-link" href="#">
                        <i className="fas fa-paper-plane fa-lg text-dark" />
                      </a>
                    </li>
                    <li className="nav-item mr-3 mr-lg-0">
                      <a className="nav-link" href="#">
                        <i className="far fa-compass fa-lg text-dark" />
                      </a>
                    </li>
                    <li className="nav-item mr-3 mr-lg-0">
                      <a className="nav-link" href="#">
                        <i className="far fa-heart fa-lg text-dark" />
                      </a>
                    </li>
                    {/* Avatar */}
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                        <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" className="rounded-circle" height={22} alt="" loading="lazy" />
                      </a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                          <a className="dropdown-item" href="#">My profile</a>
                        </li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
