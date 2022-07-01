import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
function Wishlist() {
    const state = useContext(GlobalState)
    const [wishlist, setWishlist] = state.userAPI.wishlist
    const [token] = state.token
    const addtoWishlist = async (wishlist) =>{
        await axios.patch('/user/addWishlist', {wishlist}, {
            headers: {Authorization: token}
        })
    }
    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            wishlist.forEach((item, index) => {
                if(item._id === id){
                    wishlist.splice(index, 1)
                }
            })

            setWishlist([...wishlist])
            addtoWishlist(wishlist)
        }
    }
    if(wishlist.length === 0) 
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Wishlist Is Empty</h2> 
        
        return(
            <div>
            {
                wishlist.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>{product.content}</p>
                            
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }</div>
        
)}
export default Wishlist