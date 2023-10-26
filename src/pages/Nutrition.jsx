import React, { useState } from 'react'
import { useGetRecipeQuery } from '.././services/recipeApi'

const Nutrition = () => {

    const [searchTerm, setSearchTerm] = useState('')
    //Making it default as generic api for fetching all recipe's or explore recipe not available
    const [execSearch, setExecSearch] = useState('Fish')
    const { data, error, isLoading } = useGetRecipeQuery(execSearch)
    //console.log(data.meals);
    const handleSearch = (food) => {
        setExecSearch(searchTerm)
    }

    return (
        <div>
            <div className='header_nutrition'>
                <div className='search_container'>
                    <input type="text" className='search' name="search" placeholder='Enter a food item'
                        onChange={(e) => { setSearchTerm(e.target.value) }}></input>
                    <button className='searchbtn' onClick={(e) => handleSearch(searchTerm)}>Search</button>
                </div>
                <div className='quote_container'>
                    <span className='quote'>"Optimum nutrition is the medicine of tomorrow."</span>
                    <br></br>
                    <span className='author'>Linus Pauling</span>
                </div>
            </div>

            <div>
                <div className='results'>
                    <h1>Showing Results</h1>
                </div>
                {error ? (
                    <>Oh no! There was an error</>
                ) : isLoading ? (
                    <div className='loading'>Loading....</div>
                ) : data ? (
                    <div className='recipe_container'>

                        {data.meals.map((d, i) => (
                            <div className='recipe_card' key={i}>
                                <h2 className='recipe_name'>{d.strMeal}</h2>
                                <img className='recipe_img' src={d.strMealThumb} alt='recipe' />
                                <div className='capsules'>
                                    <h3 className='cal'>Calories : {"NA"}</h3>
                                    <h3 className='workout_target cus'>Cuisine: {d.strArea}</h3>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                ) : null}
            </div>
        </div>

    )
}

export default Nutrition
