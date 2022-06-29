import {Link} from "react-router-dom";
import "./topbar.css"
import React from "react";

export default function topbar() {
    const user = false;
  return (
    <div className='top'>
        
        <div className="topcenter">
            <ul className="topList">
                <li className="topListItem">
                <Link className="link" to="/">HOME</Link>
                </li>
                
                <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                
            </ul>
        </div>
        
        </div>
  )
}
