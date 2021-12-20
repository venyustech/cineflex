import './styles.css'

export default function ScheduleWrapper({ movieInfos }) {
    if (movieInfos !== undefined) {
        console.log("movieInfos: \n", movieInfos)
    }

    return (
        <>
            <div className="schedule-wrapper">
                <p className="schedule-date">Quinta-feira - 24/06/2021</p>
                <div className='hours-box'>
                    <p className="schedule-hour">15:00</p>
                    <p className="schedule-hour">15:00</p>
                    <p className="schedule-hour">15:00</p>
                    <p className="schedule-hour">15:00</p>
                    <p className="schedule-hour">15:00</p>
                    <p className="schedule-hour">15:00</p>
                    <p className="schedule-hour">15:00</p>
                    <p className="schedule-hour">15:00</p>
                </div>
            </div>
        </>
    );
}

// console.log("tempos: ", movieInfos.days)

// const componentHorarios = movieInfos.

//     console.log("print: ", idd)