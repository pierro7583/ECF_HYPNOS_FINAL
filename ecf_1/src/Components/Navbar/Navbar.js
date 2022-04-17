import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">






<div className="container-fluid">
    <Link to='/'>
    <img className="img-Logo" src='/images/logo.png' alt=''></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


      <Link to='/'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Acceuil</a>
        </li>
        </Link>


      <Link to='/Reservation'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Reservation</a>
        </li>
        </Link>

        <Link to='/Nouscontacter'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Nous contacter</a>
        </li>
        </Link>

        <Link to='/Sinscrire'>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">S'inscrire</a>
        </li>
        </Link>
       
        <Link to='/Seconnecter'>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Se connecter</a>
        </li>

        </Link>
        
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Rechercher</button>
      </form>
    </div>
  </div>




















    </nav>
  )
}
  