import { Link } from "react-router-dom";

export default function HoursBox({ hourInfos }) {
    console.log(hourInfos)
    return (
        <>
            {hourInfos.map(hourInfo => (
                <Link to={`/assentos/${hourInfo.id}`}>
                    <p className="schedule-hour">{hourInfo.name}</p>
                </Link>
            ))}
        </>
    )
}