function CardListInfo({ dateOfBirth, house, patronus, alive }) {
    return (
        <ul className="character__infos">
            { dateOfBirth && <li className="character__info"><strong>Nascimento: </strong>{ dateOfBirth } </li> }
            { house && <li className="character__info"><strong>Casa: </strong>{ house } </li>}
            { patronus && <li className="character__info"><strong>Patrono: </strong>{ patronus } </li>}
            <li className="character__info"><strong>Esta Vivo? </strong> { alive ? "Sim" : "Não"} </li>
        </ul>
    );
}

export default CardListInfo