import './Card.css';

import CardTop from './components/CardTop';
import CardMiddle from './components/CardMiddle';
import CardBottom from './components/CardBottom';

function App(): JSX.Element {
    return (
        <div className='card'>
            <CardTop />
            <CardMiddle />
            <CardBottom />
        </div>
    );
}

export default App;
