import { useState } from 'react'
import { useGetExercisesQuery } from '.././services/exercisedbApi'

const Workouts = () => {

    const { data, error, isLoading } = useGetExercisesQuery()
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(18);

    if (error) {
        return <>Oh no, there was an error</>
    }

    if (isLoading) {
        return <div className='loading'>Loading...</div>
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

    // for (let i = 1; i <= Math.ceil(data.length / postPerPage); i++) {
    //     pageNumbers.push(i)

    // }

    for (let i = 1; i <= 10; i++) {
        pageNumbers.push(i)

    }

    console.log("PAGE " + pageNumbers)
    return (
        <div>

            <h4 className='note'>New features coming soon!!!!</h4>

            {/*1. Pagination 2. Search by bodyPart 3. Categories*/}

            {posts ? (
                <div className='exercise_items'>
                    {posts.map((d, i) => (
                        <div key={i} className='workout_cards'>
                            <img className='workout_gif' src={d.gifUrl} alt={d.name} loading="lazy" />
                            <div className='text_capsules'>
                                <h3 className="workout_bodypart">{d.bodyPart}</h3>
                                <h3 className='workout_target'>{d.target}</h3>
                            </div>
                            <div className='workout_name'>
                                <h3>{d.name}</h3>
                            </div>
                        </div>
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
