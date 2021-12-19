import { Link } from 'react-router-dom'
import './styles.css';

export default function MoviesBox() {
    return (
        <>
            <p className="spam-title">Selecione o filme</p>
            <div className="container-wrapper">
                <Link to='/sessoes/iddofilme'>
                    <div className='movies-box'>
                        <img src='https://i.imgur.com/xReItOy.png'></img>
                    </div>
                </Link>


            </div>
        </>
    );
}