import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DateEntry.css';

// --- SVGs for Lush Decorations ---

const SpinningFlower: React.FC = () => (
    <svg viewBox="0 0 100 100" className="spinning-flower" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="15" fill="#FFF" stroke="#FFB7B2" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <path
                key={i}
                d="M50 50 Q65 20 80 50 Q65 80 50 50"
                fill={i % 2 === 0 ? "#FFC1CC" : "#FFDAC1"}
                opacity="0.9"
                transform={`rotate(${angle} 50 50)`}
            />
        ))}
        <circle cx="50" cy="50" r="10" fill="#FF69B4" opacity="0.2" />
    </svg>
);

const FlowerCluster: React.FC = () => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Leaves Background */}
        <path d="M50 150 Q20 100 60 80" stroke="#90EE90" strokeWidth="4" fill="none" />
        <path d="M150 150 Q180 100 140 80" stroke="#90EE90" strokeWidth="4" fill="none" />
        <circle cx="40" cy="140" r="20" fill="#98FB98" opacity="0.6" />
        <circle cx="160" cy="140" r="25" fill="#98FB98" opacity="0.6" />

        {/* Flowers */}
        <circle cx="100" cy="100" r="30" fill="#FFB7B2" />
        <circle cx="100" cy="100" r="15" fill="#FFF" />

        <circle cx="60" cy="120" r="20" fill="#FFDAC1" />
        <circle cx="140" cy="120" r="20" fill="#E0BBE4" />
        <circle cx="100" cy="150" r="25" fill="#B5EAD7" />

        {/* Tiny Buds */}
        <circle cx="80" cy="70" r="8" fill="#FF69B4" />
        <circle cx="120" cy="70" r="8" fill="#FF69B4" />
    </svg>
);

const HangingVine: React.FC = () => (
    <svg viewBox="0 0 100 300" preserveAspectRatio="none" className="vine-branch" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0 Q20 50 50 100 Q80 150 50 200 Q20 250 50 300" stroke="#90EE90" strokeWidth="3" fill="none" />
        <circle cx="20" cy="50" r="5" fill="#FFB7B2" />
        <circle cx="80" cy="150" r="5" fill="#E0BBE4" />
        <circle cx="20" cy="250" r="5" fill="#FFDAC1" />
        <path d="M50 50 L30 60" stroke="#90EE90" strokeWidth="2" />
        <path d="M50 150 L70 160" stroke="#90EE90" strokeWidth="2" />
    </svg>
);

const BeeSVG: React.FC = () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 40 C10 20 10 60 30 50" fill="#E6E6FA" opacity="0.8" />
        <path d="M40 35 C20 10 20 50 40 45" fill="#E6E6FA" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="15" ry="10" fill="#FFD700" />
        <path d="M45 42 L45 58" stroke="#000" strokeWidth="2" />
        <path d="M50 40 L50 60" stroke="#000" strokeWidth="2" />
        <path d="M55 42 L55 58" stroke="#000" strokeWidth="2" />
        <circle cx="58" cy="48" r="1.5" fill="#000" />
        <path d="M35 50 L30 50" stroke="#000" strokeWidth="1" />
    </svg>
);

const DateEntry: React.FC = () => {
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const d = day.padStart(2, '0');
        const m = month.padStart(2, '0');
        if ((d === '10' && m === '07' && year === '2006') || (d === '24' && m === '06' && year === '2004')) {
            navigate('/love');
        } else {
            alert('Hmm... Ngày này không đúng rồi. Thử lại xem nào! 🥺');
        }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>, maxLength: number, maxValue?: number) => {
        const val = e.target.value;
        if (!/^\d*$/.test(val)) return;
        if (val.length > maxLength) return;
        if (maxValue && val !== '') {
            const num = parseInt(val, 10);
            if (num > maxValue || (val.length === maxLength && num === 0)) return;
        }
        setter(val);
    };

    return (
        <div className="date-entry-container">
            {/* Hanging Vines */}
            <div className="top-vine">
                <HangingVine />
                <HangingVine />
                <HangingVine />
                <HangingVine />
                <HangingVine />
                <HangingVine />
            </div>

            {/* Lush Corner Clusters */}
            <div className="corner-cluster cluster-tl"><FlowerCluster /></div>
            <div className="corner-cluster cluster-tr"><FlowerCluster /></div>
            <div className="corner-cluster cluster-bl"><FlowerCluster /></div>
            <div className="corner-cluster cluster-br"><FlowerCluster /></div>

            {/* Bees Orbiting Clusters */}
            <div className="bee bee-tl"><BeeSVG /></div>
            <div className="bee bee-tr"><BeeSVG /></div>
            <div className="bee bee-bl"><BeeSVG /></div>
            <div className="bee bee-br"><BeeSVG /></div>

            <div className="card">
                <div className="main-logo-container">
                    <SpinningFlower />
                </div>
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
                                onChange={(e) => handleInput(e, setDay, 2, 31)}
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
                                onChange={(e) => handleInput(e, setMonth, 2, 12)}
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
