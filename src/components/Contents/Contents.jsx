import React, { useState } from 'react';
import './Contents.css';
import Notice from './Notice/Notice';
import Gallery from './Gallery/Gallery';
import Banner from './Banner/Banner';
import Shortcut from './Shortcut/Shortcut';

function Contents() {
    const [activeTab, setActiveTab] = useState('notice');

    return (
        <div className="contents">
            <div className="tab-section">
                <div className="tabs">
                    <button
                        className={activeTab === 'notice' ? 'active' : ''}
                        onClick={() => setActiveTab('notice')}
                    >
                        공지사항
                    </button>
                    <button
                        className={activeTab === 'gallery' ? 'active' : ''}
                        onClick={() => setActiveTab('gallery')}
                    >
                        갤러리
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'notice' && <Notice />}
                    {activeTab === 'gallery' && <Gallery />}
                </div>
            </div>

            <div className="banner-section">
                <Banner />
            </div>

            <div className="shortcut-section">
                <Shortcut />
            </div>
        </div>
    );
}

export default Contents;