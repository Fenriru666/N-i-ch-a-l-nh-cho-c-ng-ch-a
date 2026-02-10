import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DateEntry.css';

// --- SVGs for Lush Decorations ---



// Lush Corner Cluster (Reused from LovePage)
const LushCorner: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
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

// --- Image/SVG Hybrid Component ---
const ImageOrSVG: React.FC<{ imageName: string; SvgComponent: React.ComponentType; alt: string }> = ({ imageName, SvgComponent, alt }) => {
    const [imageError, setImageError] = useState(false);

    if (imageError) {
        return <SvgComponent />;
    }

    return (
        <img
            src={`/${imageName}`}
            alt={alt}
            onError={() => setImageError(true)}
            className="bouquet-image"
        />
    );
};

// Corner Wrappers for ImageOrSVG Fallback
const CornerTL = () => <LushCorner />;
const CornerTR = () => <LushCorner style={{ transform: 'scaleX(-1)' }} />;
const CornerBL = () => <LushCorner style={{ transform: 'scaleY(-1)' }} />;
const CornerBR = () => <LushCorner style={{ transform: 'scale(-1)' }} />;



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
            {/* Corner Decorations (From LovePage) */}
            <div className="shop-corner-decoration shop-top-left">
                <ImageOrSVG imageName="corner1.png" SvgComponent={CornerTL} alt="Góc trên trái" />
            </div>
            <div className="shop-corner-decoration shop-top-right">
                <ImageOrSVG imageName="corner2.png" SvgComponent={CornerTR} alt="Góc trên phải" />
            </div>
            <div className="shop-corner-decoration shop-bottom-left">
                <ImageOrSVG imageName="corner3.png" SvgComponent={CornerBL} alt="Góc dưới trái" />
            </div>
            <div className="shop-corner-decoration shop-bottom-right">
                <ImageOrSVG imageName="corner4.png" SvgComponent={CornerBR} alt="Góc dưới phải" />
            </div>

            <div className="card">
                <div className="welcome-board-container" style={{ marginTop: '0', marginBottom: '2rem' }}>
                    <div className="welcome-board">
                        <div className="board-inner">
                            <h1 className="board-text" style={{ fontSize: '1.8rem' }}>Xin chào!<br />mời tình yêu điền thông tin</h1>
                        </div>
                    </div>
                </div>
                <p className="subtitle" style={{ color: '#888' }}>Hãy điền ngày sinh của tình yêu vào đây nhá</p>

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
