import axios from 'axios';
import { Link } from 'react-router-dom';
import PlaceSelected from '../PlaceSelected';
import UserInfos from '../UserInfos';
import './styles.css';

export default function FinishBox({ reserve }) {
    console.log("finish reserve:", reserve)
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', reserve);
    promise.then(answer => console.log("resposta: ", answer.data));
    return (
        <>
            <p className="finish-title">Pedido feito com sucesso!</p>
            <div className="finish-request-container">
                <div className='finish-request-wrapper'>
                    <div className="finish-request-title">Filme e sessão</div>
                    <div className='success-selected-wrapper'>
                        <div className='infos-finish-request'><p>{reserve.movieTitle}</p></div>
                        <div className='infos-finish-request'> <p>{reserve.date} {reserve.hour}</p></div>
                    </div>
                </div>
                <div className='finish-request-wrapper'>
                    <div className="finish-request-title">Ingressos</div>
                    <div className='success-selected-wrapper'>
                        {reserve.seat.map(rowData =>
                            <div className='infos-finish-request'><p>{rowData}</p></div>
                        )}
                    </div>
                </div>
                <div className='finish-request-wrapper'>
                    <div className="finish-request-title">Comprador</div>
                    <div className='success-selected-wrapper'>
                        <div className='infos-finish-request'><p>Nome : {reserve.name}</p></div>
                        <div className='infos-finish-request'><p>Cpf : {reserve.cpf}</p></div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <div className='reserve-button-wrapper'>
                    <button className='reserve-button' >Voltar pra home</button>
                </div>
            </Link>
        </>
    );
}