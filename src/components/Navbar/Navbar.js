import React from 'react'
import './Navbar.css'
export default function Navbar(props) {
  return (
    <div>
          <nav className="navbar navbar-expand-lg  bg-color">
              <div className="container-fluid">
              <h2 className="navbar-brand" >VrindaCart</h2>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <button className="nav-link" type='button'>Home</button>
                          </li>
                          <li className="nav-item">
                              <button type='button' className="nav-link">About</button>
                          </li>
                          <li className="nav-item dropdown">
                              <button className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
                                Explore More
                              </button>
                              <ul className="dropdown-menu">
                                  <li><button type='button' className="dropdown-item" >Veg</button></li>
                                  <li><button type='button' className="dropdown-item" >Fast-Food</button></li>
                                  <li><hr className="dropdown-divider"/></li>
                                  <li><button type='button' className="dropdown-item" >Home Made</button></li>
                              </ul>
                          </li>
                      </ul>
                    {/* starting of cart section */}
                          <button type="button" className="btn btn-primary position-relative mx-3 btnColor">
                        <i className="bi bi-cart"></i>
                              <span className="position-absolute top-2 start-10 translate-middle badge rounded-pill bg-danger counterPos">
                                  {props.items}
                              </span>
                          </button>
                      {/* end of cart section */}

                      <form className="d-flex" role="search">
                          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                              <button className="btn btn-outline-success" type="submit">Search</button>
                      </form>
                  </div>
              </div>
          </nav>
    </div>
  )
}
