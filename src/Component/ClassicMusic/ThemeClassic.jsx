import React from 'react'
import { Link } from 'react-router-dom'
import "./ThemeClassic.css"
function ThemeClassic() {
  
    return (
        <div>
          <div className="menu-AreaClassic">
            <ul>
              <li>
              Select Theme
                <ul className="dropdown">
                  <li><Link className='Link' to={"/Gow"}>Gow Ragnarok</Link></li>
                  <li><Link className='Link' to={"/ClassicMusic"}>Classic Music</Link></li>
                  <li><Link className='Link' to={"/LordofTheRings"}>Lord of The Rings</Link></li>            
                </ul>
              </li>   
            </ul>      
          </div>
        </div>
        )
  
}

export default ThemeClassic