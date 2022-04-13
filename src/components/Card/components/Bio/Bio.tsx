import { BioProps } from './Bio.types';
import './Bio.css'

function Bio(props: BioProps): JSX.Element {
    return (
        <div className='bio-wrapper'>
            <p className='name'>{props.name} <span className='age'>{props.age}</span></p>
            <p className='location'>{props.location}</p>
        </div>
    );
}

export default Bio;
