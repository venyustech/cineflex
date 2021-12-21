import FinishBox from "../components/FinishBox";
import NavBar from "../components/NavBar";

export default function FinishRequest({ reservePost }) {
    return (
        <>
            <NavBar />
            <FinishBox reserve={reservePost} />
        </>
    );
}