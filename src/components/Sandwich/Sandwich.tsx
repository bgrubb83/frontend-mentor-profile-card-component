import './Sandwich.css';

import { SandwichProps } from './Sandwich.types';

function Sandwich(props: SandwichProps): JSX.Element {
    return (
        <div className='sandwich-wrapper'>
            <p className='sandwich-header'>{props.stat.header}</p>
            <p className='sandwich-body'>{props.stat.label}</p>
        </div>
    );
}

export default Sandwich;
