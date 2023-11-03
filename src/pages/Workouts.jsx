import { useState } from 'react'
import { useGetExercisesByBodyPartQuery } from '.././services/exercisedbApi'
import { Link } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner'
const Workouts = () => {

    //const { data, error, isLoading } = useGetExercisesQuery()
    const [searchTerm, setSearchTerm] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const { data, error, isLoading } = useGetExercisesByBodyPartQuery(searchValue)
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(18);

    if (error) {
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

    const handleSearch = (bodyPart) => {
        let search = `bodyPart/${bodyPart.toLowerCase()}`
        console.log("Inside handle Search")
        console.log(search)
        setSearchValue(search)
        setSearchTerm('')
    }
    // for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    //     pageNumbers.push(i)

    // }

    for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i)

    }
    return (
        <div>

            <h4 className='note'>New features coming soon!!!!</h4>
            <div className='search_top_container'>
                <div className='search_container'>
                    <input type="text" className='search' name="search" placeholder=' Example: Chest' value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value) }}></input>
                    <button className='searchbtn' onClick={(e) => handleSearch(searchTerm)}>Search</button>
                </div>
            </div>

            <div className='results_text_container'>
                <h3>Showing Results</h3>
            </div>
            {/*1. Pagination 2. Search by bodyPart */}
            {/* 3. Exercise Details Popup */}
            {/*4. Authentication 5. Payment Integration */}

            {posts ? (
                <div className='exercise_items'>
                    {posts.map((d, i) => (
                        <Link key={d.id} to='/details' state={{ data: d.id }} style={{ textDecoration: "none" }}>
                            <div key={d.id} className='workout_cards'>
                                <img className='workout_gif' src={d.gifUrl} alt={d.name} loading="lazy" />
                                <div className='text_capsules'>
                                    <h3 className="workout_bodypart">{d.bodyPart}</h3>
                                    <h3 className='workout_target'>{d.target}</h3>
                                </div>
                                <div className='workout_name'>
                                    <h3>{d.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                    }
                </div>
            ) : null}

            <div className='pagination-container'>
                <div className='page-number-container'>
                    {pageNumbers.map((number) => (
                        <button className='pagenumber' key={number} onClick={() => paginate(number)}>{number}</button>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Workouts
