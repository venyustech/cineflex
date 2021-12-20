import { useParams } from "react-router-dom";
import FooterBox from "../components/FooterBox";
import NavBar from "../components/NavBar";
import ScheduleBox from "../components/ScheduleBox";

export default function SelectSchedule() {
    const { movieId } = useParams();
    return (
        <>
            <NavBar />
            <ScheduleBox movieId={movieId} />
            <FooterBox />
        </>
    );
}