import React from 'react';
import './Banner.css';
// import bannerImage from '../../assets/images/banner.jpg';
import bannerImage from '../../../assets/images/react.svg';

function Banner() {
    return (
        <div className="banner">
            <a href="#">
                <img src={bannerImage} alt="쇼핑몰 특별 이벤트" />
                <div className="banner-text">
                    <h3>특별 이벤트</h3>
                    <p>여름 아이템 특가 세일</p>
                </div>
            </a>
        </div>
    );
}

export default Banner;