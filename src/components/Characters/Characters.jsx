import CharactersList from './CharactersList';
import './Characters.scss';

function Characters() {
    return (
        <section className='characters'>
            <div className="container">
                <CharactersList />
            </div>
        </section>
    );
}

export default Characters;