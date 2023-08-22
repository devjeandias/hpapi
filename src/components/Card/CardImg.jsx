import { FaUserAlt } from "react-icons/fa";

function CardImg( { src } ) {
    return (
        <figure className="character__image">
            { src && <img src={src} /> }
            { !src && <FaUserAlt /> }
        </figure>
    )
};

export default CardImg;