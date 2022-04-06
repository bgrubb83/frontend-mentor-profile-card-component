import './Bottom.css';

import Sandwich from '../Sandwich'

const stats = [
    { header: '80K', label: 'Followers' },
    { header: '803K', label: 'Likes' },
    { header: '1.4K', label: 'Photos' }
]

function Bottom(): JSX.Element {
    return (
        <div className='bottom'>
            {stats.map((stat) => {
                return <Sandwich stat={stat}/>
            })}
        </div>
    );
}

export default Bottom;
