import './CardBottom.css';

import Sandwich from '../../../Sandwich';

const stats = [
    { header: '80K', label: 'Followers' },
    { header: '803K', label: 'Likes' },
    { header: '1.4K', label: 'Photos' }
]

function CardBottom(): JSX.Element {
    return (
        <div className='card-bottom'>
            {stats.map((stat, idx) => {
                return <Sandwich stat={stat} key={idx} />
            })}
        </div>
    );
}

export default CardBottom;
