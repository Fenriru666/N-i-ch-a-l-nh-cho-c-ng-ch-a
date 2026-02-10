import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DateEntry.css';

const FlowerSVG: React.FC<{ color: string }> = ({ color }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 35C50 35 35 15 15 35C-5 55 35 65 50 65C65 65 105 55 85 35C65 15 50 35 50 35Z" fill={color} opacity="0.6" />
        <path d="M50 65C50 65 65 85 85 65C105 45 65 35 50 35C35 35 -5 45 15 65C35 85 50 65 50 65Z" fill={color} opacity="0.6" transform="rotate(90 50 50)" />
        <circle cx="50" cy="50" r="10" fill="#FFF" />
    </svg>
);

const BeeSVG: React.FC = () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Wings */}
        <path d="M30 40 C10 20 10 60 30 50" fill="#E6E6FA" opacity="0.8" />
        <path d="M40 35 C20 10 20 50 40 45" fill="#E6E6FA" opacity="0.8" />

        {/* Body */}
        <ellipse cx="50" cy="50" rx="15" ry="10" fill="#FFD700" />

        {/* Stripes */}
        <path d="M45 42 L45 58" stroke="#000" strokeWidth="2" />
        <path d="M50 40 L50 60" stroke="#000" strokeWidth="2" />
        <path d="M55 42 L55 58" stroke="#000" strokeWidth="2" />

        {/* Eyes */}
        <circle cx="58" cy="48" r="1.5" fill="#000" />

        {/* Stinger */}
        <path d="M35 50 L30 50" stroke="#000" strokeWidth="1" />
    </svg>
);
const MainLogoFlower: React.FC = () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="main-logo-flower">
        <path d="M50 50 L50 20 C65 20 75 35 50 50" fill="#FFB7B2" />
        <path d="M50 50 L80 50 C80 65 65 75 50 50" fill="#FFDAC1" />
        <path d="M50 50 L50 80 C35 80 25 65 50 50" fill="#E2F0CB" />
        <path d="M50 50 L20 50 C20 35 35 25 50 50" fill="#B5EAD7" />

        <path d="M50 50 L71 29 C81 39 71 45 50 50" fill="#FF9AA2" opacity="0.8" />
        <path d="M50 50 L71 71 C61 81 55 71 50 50" fill="#FFB7B2" opacity="0.8" />
        <path d="M50 50 L29 71 C19 61 29 55 50 50" fill="#FFDAC1" opacity="0.8" />
        <path d="M50 50 L29 29 C39 19 45 29 50 50" fill="#E2F0CB" opacity="0.8" />

        <circle cx="50" cy="50" r="12" fill="#FFF" stroke="#FFC1CC" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill="#FFF0F5" />
    </svg>
);

const DateEntry: React.FC = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Pad single digits with leading zero for comparison
        const d = day.padStart(2, '0');
        const m = month.padStart(2, '0');

        if (d === '10' && m === '07' && year === '2006') {
            navigate('/love');
        } else {
            alert('Hmm... Ngày này không đúng rồi. Thử lại xem nào! 🥺');
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>, max: number) => {
        const val = e.target.value;
        if (/^\d*$/.test(val) && val.length <= max) {
            setter(val);
        }
    };

    return (
        <div className="date-entry-container">
            {/* Floral Decorations */}
            <div className="flower flower-1"><FlowerSVG color="#FFB7B2" /></div>
            <div className="flower flower-2"><FlowerSVG color="#FFDAC1" /></div>
            <div className="flower flower-3"><FlowerSVG color="#E2F0CB" /></div>
            <div className="flower flower-4"><FlowerSVG color="#B5EAD7" /></div>

            {/* Bee Decorations */}
            <div className="bee bee-1"><BeeSVG /></div>
            <div className="bee bee-2"><BeeSVG /></div>

            <div className="card">
                <MainLogoFlower />
                <h1 className="title">Xin chào!</h1>
                <p className="subtitle">Hãy cho mình biết ngày sinh của bạn nhé ✨</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="date-segment">
                            <label>Ngày</label>
                            <input
                                type="text"
                                className="manual-input"
                                placeholder="DD"
                                value={day}
                                onChange={(e) => handleInput(e, setDay, 2)}
                                maxLength={2}
                                required
                            />
                        </div>
                        <div className="date-segment">
                            <label>Tháng</label>
                            <input
                                type="text"
                                className="manual-input"
                                placeholder="MM"
                                value={month}
                                onChange={(e) => handleInput(e, setMonth, 2)}
                                maxLength={2}
                                required
                            />
                        </div>
                        <div className="date-segment">
                            <label>Năm</label>
                            <input
                                type="text"
                                className="manual-input year"
                                placeholder="YYYY"
                                value={year}
                                onChange={(e) => handleInput(e, setYear, 4)}
                                maxLength={4}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Tiếp tục 🌸
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DateEntry;
