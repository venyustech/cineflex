import './styles.css'

export default function UserInputs() {
    return (
        <div className='user-inputs-wrapper'>
            <div className='user-box'>
                <div className='user-card'>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..."></input>
                </div>
            </div>
            <div className='user-box'>
                <div className='user-card'>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..."></input>
                </div>
            </div>
        </div>
    );
}