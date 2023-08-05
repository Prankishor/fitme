import React from 'react'
import { useGetExercisesQuery } from '.././services/exercisedbApi'


const Workouts = () => {

    const { data, error, isLoading } = useGetExercisesQuery()
    return (
        <div>

            <h4 className='note'>New features coming soon!!!!</h4>

            {/*1. Pagination 2. Search by bodyPart 3. Categories*/}

            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <div className='exercise_items'>
                    {data.map((d, i) => (
                        <div className='workout_cards'>
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

        </div>
    )
}

export default Workouts
