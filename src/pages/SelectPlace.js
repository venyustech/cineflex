import { useParams } from "react-router-dom";

import NavBar from "../components/NavBar";
import PlaceBox from "../components/PlaceBox";

export default function SelectPlace() {
    const { placeId } = useParams();
    return (
        <>
            <NavBar />
            <PlaceBox placeId={placeId} />
        </>
    );
}