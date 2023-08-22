import Card from '../Card'

function CharactersList() {
    let Characters = Array("item 1","item 2","item 3","item 4");
    return (
        <div className='characters__list'>
            {
                Characters.map( item => (
                    <Card
                        key={Math.random()}
                        data={[{
                            name: "Nome",
                            wizard: "Casa"
                        }]}
                    />
                ))
            }
        </div>
    );
}

export default CharactersList