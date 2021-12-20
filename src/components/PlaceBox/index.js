
import Places from '../Places.js';
import UserInputs from '../UserInputs';
import './styles.css'
export default function PlaceBox() {
    return (
        <>
            <div className='place-box-container'>
                <p className="spam-title">Selecione o(s) assento(s)</p>
                <Places />
                <UserInputs />
                <div className='reserve-button-wrapper'>
                    <button className='reserve-button' >Reservar assento(s)</button>
                </div>
            </div>
        </>
    );

}