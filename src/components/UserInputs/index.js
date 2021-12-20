import axios from 'axios';
import { useState } from 'react'
import './styles.css'

export default function UserInputs({ infosPlace }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    function createSelectedIdBox() {
        const idValue = [];
        infosPlace.forEach(value => {
            if (value.isSelected == true) {
                idValue.push(value.id)
            }
        })
        const reservePost = {
            ids: idValue,
            name: name,
            cpf: cpf
        }
        console.log("reservePost: ", reservePost)
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', reservePost);
        promise.then(answer => console.log("resposta: ", answer.data));
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

            <div className='reserve-button-wrapper'>
                <button className='reserve-button' onClick={createSelectedIdBox} >Reservar assento(s)</button>
            </div>
        </>
    );
}