
import axios from 'axios';
import { useEffect, useState } from 'react';
import Places from '../Places.js';
import UserInputs from '../UserInputs';
import './styles.css'

export default function PlaceBox({ placeId }) {
    const [placeInfos, setPlaceInfos] = useState(null);
    const [newPlaces, setNewPlaces] = useState([]);
    const [idPlacesSelected, setPlaceInfoSelected] = useState([]);
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
                <Places seat={placeInfos.seats} newPlaces={newPlaces} setNewPlaces={setNewPlaces} />
            </div>

        </>
    );
}