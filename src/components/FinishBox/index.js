import MovieSelected from '../MovieSelected';
import PlaceSelected from '../PlaceSelected';
import UserInfos from '../UserInfos';
import './styles.css';

export default function FinishBox() {
    return (
        <>
            <p className="finish-title">Pedido feito com sucesso!</p>
            <div className="finish-request-container">
                <MovieSelected />
                <PlaceSelected />
                <UserInfos />
            </div>
            <div className='reserve-button-wrapper'>
                <button className='reserve-button' >Voltar pra home</button>
            </div>
        </>
    );
}