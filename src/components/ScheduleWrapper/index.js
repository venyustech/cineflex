import HoursBox from '../hoursBox/index.js';
import './styles.css'

export default function ScheduleWrapper({ dayInfos }) {
    return (
        <>
            {dayInfos.map(dayInfo => (
                <div className="schedule-wrapper">
                    <p className="schedule-date">{dayInfo.weekday} - {dayInfo.date}</p>
                    <div className='hours-box'>
                        <HoursBox hourInfos={dayInfo.showtimes} />
                    </div>
                </div>
            ))}
        </>
    );
}