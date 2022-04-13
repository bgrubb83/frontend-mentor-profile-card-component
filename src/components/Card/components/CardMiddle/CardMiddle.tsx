import './CardMiddle.css';
import Bio from '../../components/Bio';

const bioData = {
    name: 'Victor Crest',
    age: 26,
    location: 'London',
}

function CardMiddle(): JSX.Element {
    return (
        <div className='card-middle'>
            <Bio
                name={bioData.name}
                age={bioData.age}
                location={bioData.location}
            />
        </div>
    );
}

export default CardMiddle;
