import axios from 'axios';
import { useQuery } from 'react-query';
import Card from '../Card';
import Loading from '../Loading';
import Error from '../Error';

function CharactersList() {
    const { data, isLoading, error } = useQuery('characters', () => {
        return axios.get("https://hp-api.onrender.com/api/characters").then( response => response.data );
    });

    if( isLoading ) {
        return <Loading />;
    }

    if( error ) {
        return <Error />;
    }

    return (
        <div className='characters__list'>
            { data.map( character => (
                <Card key={ character.id + Math.random() } data={character} />
            )) }
        </div>
    );
}

export default CharactersList