import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'

export default function UserInputs({ infosPlace, reserve, movieInfo }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    function createSelectedIdBox() {
        const idValue = [];
        infosPlace.forEach(value => {
            if (value.isSelected == true) {
                idValue.push(value.id)
            }
        })
        const seatName = [];
        infosPlace.forEach(value => {
            if (value.isSelected == true) {
                seatName.push(value.name)
            }
        })


        reserve(
            {
                ids: idValue,
                name: name,
                cpf: cpf,
                seat: seatName,
                date: movieInfo.day.date,
                hour: movieInfo.name,
                movieTitle: movieInfo.movie.title,

            }
        )

        console.log("reservePost: ", reserve)
    }

    return (
        <>
            <div className='user-inputs-wrapper'>
                <div className='user-box'>
                    <div className='user-card'>
                        <p>Nome do comprador:</p>
                        <input placeholder="Digite seu nome..."
                            onChange={(e) => setName(e.target.value)}>
                        </input>
                    </div>
                </div>
                <div className='user-box'>
                    <div className='user-card'>
                        <p>CPF do comprador:</p>
                        <input placeholder="Digite seu CPF..."
                            onChange={(e) => setCpf(e.target.value)}>
                        </input>
                    </div>
                </div>
            </div>
            <Link to="/sucesso">
                <div className='reserve-button-wrapper'>
                    <button className='reserve-button' onClick={createSelectedIdBox} >Reservar assento(s)</button>
                </div>
            </Link>
        </>
    );
}