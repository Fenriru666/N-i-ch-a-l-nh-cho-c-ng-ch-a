import React from 'react';
import './LovePage.css';

const LovePage: React.FC = () => {
    return (
        <div className="love-page-container">
            <div className="love-card">
                <div className="heart-decoration">💖</div>
                <h1 className="love-title">Gửi đến thiên thần của anh</h1>

                <div className="message-box">
                    <p>
                        (Nơi này sẽ chứa những lời chúc yêu thương ngọt ngào nhất dành cho em...
                        Anh sẽ viết tiếp những dòng này sau nhé! 🥰)
                    </p>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#aaa' }}>
                    Yêu em nhiều hơn hôm qua và ít hơn ngày mai ✨
                </p>
            </div>
        </div>
    );
};

export default LovePage;
