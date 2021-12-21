import PlacesLegend from '../PlacesLegend';
import UserInputs from '../UserInputs';
import './styles.css'

export default function Places({ seat, newPlaces, setNewPlaces, reservePost, movieInfos }) {

    function changeColor(id) {
        const newArray = newPlaces.map(seat => {
            if (seat.id === id && seat.isAvailable) {
                seat.isSelected = !seat.isSelected;
            }
            if (seat.id === id && !seat.isAvailable) {
                alert("Esse assento não está disponível");
            }
            return seat;
        })
        setNewPlaces(newArray)
    }
    return (
        <>
            <div className="places-container">
                <div className="places-container">
                    {newPlaces.map(seatParam => {
                        return (<div className={`places-wrapper 
                        ${seatParam.isSelected ? 'selected-color' :
                                seatParam.isAvailable ? 'available-color' : 'unavailable-color'}
                        `}
                            onClick={() => changeColor(seatParam.id)}>
                            <p>{seatParam.name}</p>
                        </div>)
                    })}
                </div>
            </div>
            <PlacesLegend />
            <UserInputs infosPlace={newPlaces} reserve={reservePost} movieInfo={movieInfos} />
            <div className='selected-movie-wrapper' >
                <div className='selected-movie-box'>
                    <div className='selected-movie-image-wrapper'>
                        <img src={movieInfos.movie.posterURL} alt={movieInfos.movie.title}></img>
                    </div>
                </div>
                <div class="movie-infos-card">
                    <p className='selected-movie-name'> {movieInfos.movie.title}</p>
                    <p className='selected-movie-name'> {movieInfos.day.weekday} - {movieInfos.name}</p>
                </div>
            </div>
        </>
    );
}