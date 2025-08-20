import React from 'react';
import './Shortcut.css';
// import shortcut1 from '../../assets/images/shortcut1.jpg';
// import shortcut2 from '../../assets/images/shortcut2.jpg';
import shortcut1 from '../../../assets/images/react.svg';
import shortcut2 from '../../../assets/images/react.svg';


function Shortcut() {
    return (
        <div className="shortcut">
            <ul className="shortcut-list">
                <li>
                    <a href="#">
                        <img src={shortcut1} alt="고객센터 바로가기" />
                        <span>고객센터</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={shortcut2} alt="오시는길 바로가기" />
                        <span>오시는길</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Shortcut;