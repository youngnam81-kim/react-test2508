import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.jpg';

function Header() {
    const [activeMenu, setActiveMenu] = useState(null);

    const menus = [
        {
            name: '탑',
            subMenus: ['블라우스', '티', '셔츠', '니트']
        },
        {
            name: '아우터',
            subMenus: ['자켓', '코트', '가디건', '머플러']
        },
        {
            name: '팬츠',
            subMenus: ['청바지', '짧은바지', '긴바지', '레깅스']
        },
        {
            name: '악세서리',
            subMenus: ['귀고리', '목걸이', '반지', '팔찌']
        }
    ];

    return (
        <header className="header">
            <div className="logo">
                <a href="#"><img src={Logo} alt="JUST 쇼핑몰" width="50" height="50" /></a>
            </div>
            <nav className="main-menu">
                <ul>
                    {menus.map((menu, index) => (
                        <li
                            key={index}
                            onMouseEnter={() => setActiveMenu(index)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            <a href="#">{menu.name}</a>
                            {activeMenu === index && (
                                <div className="sub-menu">
                                    <ul>
                                        {menu.subMenus.map((subMenu, subIndex) => (
                                            <li key={subIndex}>
                                                <a href="#">{subMenu}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Header;