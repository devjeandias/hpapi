// import { FaCalendarCheck, FaStar, FaHatWizard, FaHeartPulse } from 'react-icons/fa6';
import CardImg  from './CardImg';
import './Card.scss';

function Card({data}) {
    return (
        <div className="character__card">
            <CardImg src={data.image} />
        </div>
    );
}

export default Card