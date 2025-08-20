import React from 'react';
import './Gallery.css';
// import gallery1 from '../../assets/images/gallery1.jpg';
// import gallery2 from '../../assets/images/gallery2.jpg';
// import gallery3 from '../../assets/images/gallery3.jpg';

import gallery1 from '../../../assets/images/react.svg';
import gallery2 from '../../../assets/images/react.svg';
import gallery3 from '../../../assets/images/react.svg';


function Gallery() {
    const galleryItems = [
        {
            image: gallery1,
            title: "신상품 블라우스"
        },
        {
            image: gallery2,
            title: "여름 자켓 컬렉션"
        },
        {
            image: gallery3,
            title: "액세서리 특별전"
        }
    ];

    return (
        <div className="gallery">
            <ul className="gallery-list">
                {galleryItems.map((item, index) => (
                    <li key={index} className="gallery-item">
                        <a href="#">
                            <img src={item.image} alt={item.title} />
                            <p className="gallery-title">{item.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Gallery;