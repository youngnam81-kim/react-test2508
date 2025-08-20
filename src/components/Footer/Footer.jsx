import React from 'react';
import './Footer.css';
// import logoGray from '../../assets/images/logo_gray.png';
import logoGray from '../../assets/images/vite.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logoGray} alt="JUST 쇼핑몰" />
                </div>
                <div className="footer-info">
                    <p>
                        상호: JUST 쇼핑몰 | 대표: 홍길동 | 사업자등록번호: 123-45-67890
                        <br />
                        주소: 서울특별시 강남구 테헤란로 123 | 전화: 02-123-4567
                        <br />
                        Copyright © JUST Shopping Mall. All Rights Reserved.
                    </p>
                </div>
                <div className="footer-sns">
                    <ul>
                        <li><a href="#" aria-label="페이스북"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" aria-label="인스타그램"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#" aria-label="유튜브"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;