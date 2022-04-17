import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>

<Link to='/'>Acceuil</Link>
<Link to='/Reservation'>Reservation</Link>
<Link to='/Nouscontacter'>Nous contacter</Link>
<Link to='/Sinscrire'>S'inscrire</Link>
<Link to='/Seconnecter'>Se connecter</Link>


    </nav>
  )
}
  