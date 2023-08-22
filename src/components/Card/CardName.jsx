function CardName( { name, actor } ) {
    return ( <h3 className="character__name">{ name } {actor && <small>{ actor }</small>}</h3> )
}

export default CardName