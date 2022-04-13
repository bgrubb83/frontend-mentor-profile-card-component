import image from './bg-pattern-top.svg';
import './DecorationTop.css';

function DecorationTop(): JSX.Element {
    return (
        <div>
            <img src={image} className='decoration-top'/>
        </div>
    );
}

export default DecorationTop;
