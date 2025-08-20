import React, { useState } from 'react';
import './Notice.css';

var popupContent = {
    title: "",
    date: "",
    content: ""
};

function Notice() {
    const [showPopup, setShowPopup] = useState(false);

    const notices = [
        {
            title: "신규회원 대상 이벤트 안내",
            date: "2025-08-10",
            content: "JUST 쇼핑몰에 오신 것을 환영합니다. 신규가입 회원 대상 첫 구매 시 10% 할인 이벤트를 진행하고 있습니다. 많은 참여 부탁드립니다."
        },
        {
            title: "여름 신상품 입고 안내",
            date: "2025-08-08",
            content: "JUST 쇼핑몰에 오신 것을 환영합니다. "
        },
        {
            title: "배송 지연 공지사항",
            date: "2025-08-05",
            content: "신규가입 회원 대상 첫 구매 시 10% 할인 이벤트를 진행하고 있습니다. 많은 참여 부탁드립니다."
        },
        {
            title: "카드사 무이자 할부 안내",
            date: "2025-08-01",
            content: "많은 참여 부탁드립니다."
        }
    ];



    return (
        <div className="notice">
            <ul className="notice-list">
                {notices.map((notice, index, content) => (
                    <li key={index} className="notice-item">
                        <a
                            href="#"
                            onClick={(e) => {
                                console.log(index, notice, content);
                                e.preventDefault();
                                popupContent.title = notice.title;
                                popupContent.content = notice.content;
                                popupContent.date = notice.date;

                                setShowPopup(true);
                            }}
                        >
                            {notice.title}
                            <span className="notice-date">{notice.date}</span>
                        </a>
                    </li>
                ))}
            </ul>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <div className="popup-header">
                            <h3>{popupContent.title}</h3>
                            <button
                                className="close-btn"
                                onClick={() => setShowPopup(false)}
                            >
                                X
                            </button>
                        </div>
                        <div className="popup-body">
                            <p>{popupContent.content}</p>
                            <p color='red'>{popupContent.date}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Notice;