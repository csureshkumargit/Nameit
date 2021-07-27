import react from 'react';
import './NameCard.css';

const NameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ SuggestedName }) => {
    return (
        <a href={`${NameCheapUrl}${SuggestedName}`} target='_blank'>
            <div className='name-card'>
                <p className='result-name'>{SuggestedName}</p>
            </div>
        </a>
    );
}

export default NameCard;