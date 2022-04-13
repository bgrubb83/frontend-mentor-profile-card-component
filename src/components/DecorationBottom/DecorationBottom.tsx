import image from './bg-pattern-bottom.svg';
import './DecorationBottom.css';

function DecorationBottom(): JSX.Element {
    return (
        <div>
            <img src={image} className='decoration-bottom'/>
        </div>
    );
}

export default DecorationBottom;
