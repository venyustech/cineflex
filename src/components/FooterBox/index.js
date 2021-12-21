import './styles.css';

export default function FooterBox({ imageUrl, movieTitle }) {
    return (
        <div className='selected-movie-wrapper' >
            <div className='selected-movie-box'>
                <div className='selected-movie-image-wrapper'>
                    <img src={imageUrl} alt={movieTitle}></img>
                </div>
            </div>
            <p className='selected-movie-name'> {movieTitle}</p>
        </div>
    );
}