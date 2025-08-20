import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import React, { useState } from 'react';
import Modal from '../modal/Modal';

const Top = () => {
    const [isModalOpen1, setIsModalOpen1] = useState(false);

    // 모달 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달에 표시할 데이터
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // 폼 입력 처리
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // 입력 필드 변경 처리
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();
        // 입력된 데이터를 모달에 표시할 데이터로 설정
        setUserData({ ...formData });
        // 모달 열기
        setIsModalOpen(true);
    };

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>

            <div className="app">
                <h1>Modal 팝업 예제</h1>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>이름:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>이메일:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>메시지:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">데이터 전송</button>
                </form>

                {/* 모달 컴포넌트 */}
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <h2>입력하신 정보</h2>
                    <p><strong>이름:</strong> {userData.name}</p>
                    <p><strong>이메일:</strong> {userData.email}</p>
                    <p><strong>메시지:</strong> {userData.message}</p>
                    <button onClick={() => setIsModalOpen(false)}>확인</button>
                </Modal>
            </div>
        </>
    )
}

export default Top;