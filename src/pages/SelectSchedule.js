import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import ScheduleBox from "../components/ScheduleBox";

export default function SelectSchedule() {
    const { movieId } = useParams();
    return (
        <>
            <NavBar />
            <ScheduleBox movieId={movieId} />
        </>
    );
} 