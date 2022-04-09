import './Middle.css';
import Bio from '../Bio';

const bioData = {
    name: 'Victor Crest',
    age: 26,
    location: 'London',
}

function Middle(): JSX.Element {
    return (
        <div className='middle'>
            <Bio
                name={bioData.name}
                age={bioData.age}
                location={bioData.location}
            />
        </div>
    );
}

export default Middle;
