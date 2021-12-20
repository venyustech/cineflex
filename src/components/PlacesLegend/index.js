import './styles.css'
export default function PlacesLegend() {
    return (
        <div className="places-contanier" >

            <div className='place-legend-wrapper'>
                <div className='place-legend-card'>
                    <div className='place-legend-box selected-color'></div>
                    <div className='selected-text'>Selecionado</div>
                </div>
                <div className='place-legend-card'>
                    <div className='place-legend-box'></div>
                    <div className='available-text'>Disponível</div>
                </div>
                <div className='place-legend-card'>
                    <div className='place-legend-box unavailable-color'></div>
                    <div className='unavailable-text'>Indisponível</div>
                </div>
            </div>

        </div>

    );
}