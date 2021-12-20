import axios from 'axios';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import './styles.css';

export default function MoviesBox() {
    const [images, setImages] = useState([]);
    const [loadAgain, setLoadAgain] = useState(true);

    useEffect(() => {
        if (loadAgain) {
            const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
            promise.then(answer => {
                setImages(answer.data);
                setLoadAgain(false);
            });
        }
    }, [loadAgain]);


    return (
        <>
            <p className="spam-title">Selecione o filme</p>
            <div className="container-wrapper">
                {images.length === 0 ? 'Carregando...' : ''}
                {images.map(image => (
                    < Link to='/sessoes/iddofilme' >
                        <div className='movies-box'>
                            <img src={image.posterURL} alt="imagem do filme"></img>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}