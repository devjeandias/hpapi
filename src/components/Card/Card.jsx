import CardImagem  from './CardImagem';
import CardName  from './CardName';
import CardListInfo  from './CardListInfo';

import './Card.scss';

function Card({data}) {
    return (
        <div className="character__card">
            <CardImagem src={ data.image } />
            <div className="character__drop">
                <CardName
                    name={ data.name }
                    actor={data.actor}
                />
                
                <CardListInfo 
                    dateOfBirth={ data.dateOfBirth }
                    house={ data.house}
                    patronus={ data.patronus}
                    alive={ data.alive}
                />
            </div>
        </div>
    );
}

export default Card