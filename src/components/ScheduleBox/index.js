import axios from 'axios';
import { useEffect, useState } from 'react';
import ScheduleWrapper from '../ScheduleWrapper';
import './styles.css';

export default function ScheduleBox({ movieId }) {
    console.log("movieId:", movieId);
    const [movieInfos, setMovieInfos] = useState(null);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieId}/showtimes`);
        promise.then(answer => {
            setMovieInfos(answer.data)
        })
    }, []);


    if (movieInfos === null) {
        return <h1>Carregando...</h1>
    }
    return (
        <>
            <p className="spam-title">Selecione o horario</p>
            <div className="schedule-container">

                <ScheduleWrapper movieInfos={movieInfos} />
                <ScheduleWrapper />
            </div>
        </>
    );
}