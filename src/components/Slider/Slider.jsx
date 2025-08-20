import React, { useState, useEffect } from 'react';
import './Slider.css';
import slide1 from '../../assets/images/slide1.jpg';
import slide2 from '../../assets/images/slide2.jpg';
import slide3 from '../../assets/images/slide3.jpg';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState('right-to-left');
    const slides = [
        {
            image: slide1,
            text: "신상품 10% 할인"
        },
        {
            image: slide2,
            text: "쇼핑몰 오픈기념 이벤트"
        },
        {
            image: slide3,
            text: "여름 아이템 특가"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="slide-text">{slide.text}</div>
                </div>
            ))}
        </div>
    );
}

export default Slider;