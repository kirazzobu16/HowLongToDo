import React from 'react'
import "./Theme.css"
import { Link} from 'react-router-dom'
function Theme() {
  return (
  <div>
    <div className="menu-Area">
      <ul>
        <li>
        Select Theme
          <ul className="dropdown">
            <li><Link className='Link' to={"/Gow"}>Gow Ragnarok</Link></li>
            <li><Link className='Link' to={"/ClassicMusic"}>Classic Music</Link></li>
            <li><Link className='Link' to={"/LordofTheRings"}>Lord of The Rings</Link></li>
            <li><Link className='Link'to={"/StarWars"}>StarWars</Link></li>
            <li><Link className='Link'to={"/Berserk"}>Berserk</Link></li>
            <li><Link className='Link' to={"/Evangelion"}>Evangelion</Link></li>            
          </ul>
        </li>   
      </ul>      
    </div>
    
  </div>
  )
}

export default Theme