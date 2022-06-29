import React from "react"
import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            {/* <img  src= "https://images.pexels.com/photos/191295/pexels-photo-191295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" /> */}
            <img  src= "https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />

            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:  <b>safak</b></span>
                <span className="singlePostDate">1 hour ago</span>

            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae dolorum, incidunt reprehenderit a corrupti. Incidunt, illo nemo? Reiciendis ipsum incidunt eaque numquam laborum laboriosam, voluptates maiores possimus mollitia rerum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae dolorum, incidunt reprehenderit a corrupti. Incidunt, illo nemo? Reiciendis ipsum incidunt eaque numquam laborum laboriosam, voluptates maiores possimus mollitia rerum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae dolorum, incidunt reprehenderit a corrupti. Incidunt, illo nemo? Reiciendis ipsum incidunt eaque numquam laborum laboriosam, voluptates maiores possimus mollitia rerum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quae dolorum, incidunt reprehenderit a corrupti. Incidunt, illo nemo? Reiciendis ipsum incidunt eaque numquam laborum laboriosam, voluptates maiores possimus mollitia rerum.

            </p>
        </div>
        </div>
  )
}
