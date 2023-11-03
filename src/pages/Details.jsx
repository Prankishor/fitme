import React from 'react'
import { useLocation } from 'react-router-dom'
import { useGetExerciseDetailsQuery } from './../services/exercisedbApi'
import { useNavigate } from 'react-router-dom'

function Details(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state?.data;

    const { data, error, isLoading } = useGetExerciseDetailsQuery(id)

    if (error) {
        return <>Oh no, there was an error</>
    }
    if (isLoading) {
        return <div className='loading'>Loading...</div>
    }
    return (
        <>
            <div className='details_container'>
                <div className='gif_container'>
                    <img className='workout_gif' src={data.gifUrl} alt={data.name} loading="lazy" />
                </div>
                <div className='exercise_details'>
                    <h1 className='detailTextHeading'><span className='detailTextTitle'>{data.name.toUpperCase()}</span></h1>
                    <h3 className='detailText'>This exercise is known to target {data.target} muscle which belongs<br></br>
                        to the {data.bodyPart} of your body part.<br></br> We make sure that you need no equipment and
                        <br></br> only equipment you need for this exercise is your {data.equipment}.</h3>
                </div>
            </div >

            <div className='back_container'>
                <button onClick={() => navigate(-1)} className='backbtn'>Back</button>
            </div>
        </>
    )
}

export default Details
