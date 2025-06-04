import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <img src="./logo.png"><Link to={"/"}></Link></img>

        <ul>
          <li><Link to={"/"}>YOO YOUNGKUK</Link></li>
          <li><Link to={"/archives"}>ARCHIVES</Link></li>
          <li><Link to={"/foundation"}>FOUNDATION</Link></li>
        </ul>
      </header>
      
    </div>
  )
}

export default Header
