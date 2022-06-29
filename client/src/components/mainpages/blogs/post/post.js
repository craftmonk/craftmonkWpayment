import "./post.css"
import React from "react";

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://images.pexels.com/photos/191295/pexels-photo-191295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <div className="postInfo">
                
                <span className="postTitle">CraftMonk</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Best Products deliverd
                </p>
        </div>
    );
}
