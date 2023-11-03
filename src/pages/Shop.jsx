import React from 'react'
import { useGetShoesQuery } from '../services/shoesApi'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../features/cartSlice';
import { RotatingLines } from 'react-loader-spinner'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Shop = () => {
    const { data, error, isLoading } = useGetShoesQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartTotalQuantity } = useSelector(state => state.cart)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(9);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        navigate("/cart")
    }

    const handleCartPage = () => {
        navigate("/cart")
    }
    if (error) {
        console.log("ERROR", error)
        return (
            <div className='error_container'>
                <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path>
                </svg>
                <h1 className='error_msg'>Oops! An unexpected error occured.</h1>
                <h4 className='error_msg'>Most probably, the quota of the free api for today has reached its limits!</h4>
                <h3 className='error_msg'>See you tomorrow!</h3>
            </div>)
    }
    if (isLoading) {
        console.log("Loading...")
        return (
            <div className='loading_container'>
                <RotatingLines
                    strokeColor="orange"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
            </div>)
    }


    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const posts = data.slice(indexOfFirstPost, indexOfLastPost);
    const pageNumbers = [];

    const paginate = (pageNum) => {
        setCurrentPage(pageNum)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    for (let i = 1; i <= 4; i++) {
        pageNumbers.push(i)

    }

    return (
        <>
            <div className='slogan_container'>
                <h2 className='shoe_slogan'><i>Fast Feet, Strong Heart, Unstoppable You!</i></h2>
            </div>
            <div className='cart_logo' onClick={handleCartPage}>
                <ShoppingBagOutlinedIcon fontSize='large' />
                <div className='badge'>
                    <span >My Cart <span className='bag_quantity'>{cartTotalQuantity}</span></span>
                </div>
            </div>
            <div className='shoes_container'>

                {posts.map((d, i) => (
                    <div key={d.id} className='shoes_card'>
                        <img className='shoes_photo' src={d.image} alt={d.name} loading='lazy' />
                        <div className='shoe_details_container'>
                            <h3 className="shoe_name">{d.name}</h3>
                            <h3 className='shoe_price'>${d.price}</h3>
                        </div>
                        <button className='add_to_cart' onClick={() => handleAddToCart(d)}>Add To Cart</button>
                    </div>
                ))}
            </div>
            <div className='pagination-container'>
                <div className='page-number-container'>
                    {pageNumbers.map((number) => (
                        <button className='pagenumber' key={number} onClick={() => paginate(number)}>{number}</button>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default Shop
