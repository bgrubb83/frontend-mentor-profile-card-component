import './Card.css';

import Top from '../Top'
import Middle from '../Middle'
import Bottom from '../Bottom'

function App(): JSX.Element {
    return (
        <div className='card'>
            <Top />
            <Middle />
            <Bottom />
        </div>
    );
}

export default App;
