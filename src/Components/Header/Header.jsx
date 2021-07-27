import React from 'react';
import './Header.css';

const Header = ({ headerExpand, headtext }) => {
    return (
        <div class='Head-Container'>
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image ${headerExpand ? 'head-image-expanded' : 'head-image-Contracted'}`} alt="headerImage"></img>
            <h1 className={`Heading-Name ${headerExpand ? 'font-Expanded' : 'font-Contracted'}`}>{headtext}</h1>
        </div>
    );

};

export default Header;