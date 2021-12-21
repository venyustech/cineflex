
import axios from 'axios';
import { useEffect, useState } from 'react';
import Places from '../Places.js';
import './styles.css'

export default function PlaceBox({ placeId, reserve }) {
    const [placeInfos, setPlaceInfos] = useState(null);
    const [newPlaces, setNewPlaces] = useState([]);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${placeId}/seats`);
        promise.then(answer => {
            setPlaceInfos(answer.data)
            setNewPlaces(answer.data.seats.map(seat =>
                ({ ...seat, isSelected: false })
            ))
        })
    }, [placeId]);
    if (placeInfos === null) {
        return <h1>Carregando...</h1>
    }
    return (
        <>
            <div className='place-box-container'>
                <p className="spam-title">Selecione o(s) assento(s)</p>
                <Places movieInfos={placeInfos} seat={placeInfos.seats} newPlaces={newPlaces} setNewPlaces={setNewPlaces} reservePost={reserve} />
            </div>
        </>
    );
}