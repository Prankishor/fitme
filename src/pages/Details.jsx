import React from 'react'
import { useLocation } from 'react-router-dom'
import { useGetExerciseDetailsQuery } from './../services/exercisedbApi'
import { useNavigate } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'

function Details(props) {

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state?.data;

    const { data, error, isLoading } = useGetExerciseDetailsQuery(id)

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
