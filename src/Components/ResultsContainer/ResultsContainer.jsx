import React from 'react';
import './ResultsContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultsContainer = ({ SuggestedNames }) => {

    const SuggestedNamesJSX = SuggestedNames.map(SuggestedName => {
        return (
            <NameCard SuggestedName={SuggestedName} />
        );

    })

    return (
        <div className='Results-Container'>
            {SuggestedNamesJSX}
        </div>

    );
};

export default ResultsContainer;