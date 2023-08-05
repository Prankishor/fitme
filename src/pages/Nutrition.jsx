import React from 'react'

const Nutrition = () => {
    return (
        <div>
            <div className='quote_container'>
                <span className='quote'>Optimum nutrition is the medicine of tomorrow.</span>
                <br></br>
                <span className='author'>Linus Pauling</span>
            </div>

            <div className='search_container'>
                <input type="text" className='search' name="search" placeholder='Enter a food item'></input>
                <button className='searchbtn'>Search</button>
            </div>
        </div>
    )
}

export default Nutrition
