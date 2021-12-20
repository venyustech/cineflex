import './styles.css';

export default function FooterBox() {
    return (
        <div className='selected-movie-wrapper' >
            <div className='selected-movie-box'>
                <div className='selected-movie-image-wrapper'>
                    <img src='https://i.imgur.com/xReItOy.png' alt='imagem-filme'></img>
                </div>
            </div>
            <p className='selected-movie-name'> Nome Do Filme Selecionado</p>
        </div>
    );
}