import React from "react"
import Header from "../header/header"
import Posts from "../posts/Posts"
import topbar from "../topbar/topbar"
import Single from "../single/Single"

import "./home.css"

export default function home() {
  return (
    <>
        
        <Header/>
    <div className='home'>
      <Posts />
      
    </div>
    </>
  )
}
