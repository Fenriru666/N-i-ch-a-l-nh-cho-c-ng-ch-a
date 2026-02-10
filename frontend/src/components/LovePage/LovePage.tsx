
import React, { useState } from 'react';
import './LovePage.css';

// --- SVG Components for 2D Vibe ---

// --- SVG Components for Detailed Flowers ---

// 1. Pink Rose Bouquet
const FlowerRoles: React.FC = () => (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 10) scale(0.8)">
            {/* Leaves */}
            <path d="M30 80 Q20 50 40 60" stroke="#4A7023" strokeWidth="2.5" fill="none" />
            <path d="M70 80 Q80 50 60 60" stroke="#4A7023" strokeWidth="2.5" fill="none" />
            <path d="M50 80 L50 100" stroke="#4A7023" strokeWidth="3" />

            {/* Small Purple Buds */}
            <circle cx="25" cy="55" r="4" fill="#9370DB" />
            <circle cx="75" cy="55" r="4" fill="#9370DB" />

            {/* Main Pink Roses */}
            <circle cx="40" cy="40" r="14" fill="#FFB7C5" stroke="#E75480" strokeWidth="1.5" />
            <path d="M40 40 m-8 0 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0" fill="none" stroke="#E75480" strokeWidth="1" />

            <circle cx="60" cy="45" r="13" fill="#FFB7C5" stroke="#E75480" strokeWidth="1.5" />
            <path d="M60 45 m-7 0 a 7 7 0 1 0 14 0 a 7 7 0 1 0 -14 0" fill="none" stroke="#E75480" strokeWidth="1" />

            {/* Bow */}
            <path d="M40 90 Q50 100 60 90" fill="none" stroke="#D2691E" strokeWidth="2" />
        </g>
    </svg>
);



// 3. Purple Iris
const FlowerIris: React.FC = () => (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(15, 10) scale(0.8)">
            {/* Stem */}
            <path d="M50 110 L50 50" stroke="#4A7023" strokeWidth="3" />

            {/* Leaves */}
            <path d="M50 100 Q30 80 35 60" fill="none" stroke="#4A7023" strokeWidth="2" />
            <path d="M50 100 Q70 80 65 60" fill="none" stroke="#4A7023" strokeWidth="2" />

            {/* Petals */}
            <path d="M50 50 Q30 30 40 20 Q50 10 60 20 Q70 30 50 50" fill="#9370DB" stroke="#4B0082" />
            <path d="M50 50 Q35 60 30 45" fill="#BA55D3" stroke="#4B0082" />
            <path d="M50 50 Q65 60 70 45" fill="#BA55D3" stroke="#4B0082" />
            <circle cx="50" cy="45" r="3" fill="#FFD700" />
        </g>
    </svg>
);

// 4. Sunflower Combo
const FlowerSunflower: React.FC = () => (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 10) scale(0.8)">
            {/* Stem & Leaves */}
            <path d="M50 110 L50 60" stroke="#4A7023" strokeWidth="3" />
            <path d="M50 90 Q30 80 25 70" fill="none" stroke="#4A7023" strokeWidth="2" />
            <circle cx="25" cy="70" r="4" fill="#87CEEB" />

            {/* Sunflower */}
            <circle cx="50" cy="50" r="18" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />

            {/* Petals */}
            <g>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <ellipse key={i} cx="50" cy="28" rx="4" ry="8" fill="#FFD700" stroke="#DAA520" transform={`rotate(${angle} 50 50)`} />
                ))}
            </g>
            <circle cx="50" cy="50" r="8" fill="#8B4513" />
        </g>
    </svg>
);

// 5. Twin Tulips
const FlowerTulips: React.FC = () => (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 10) scale(0.8)">
            {/* Stems */}
            <path d="M50 110 Q40 80 35 60" stroke="#4A7023" strokeWidth="3" fill="none" />
            <path d="M50 110 Q60 80 65 60" stroke="#4A7023" strokeWidth="3" fill="none" />

            {/* Leaves */}
            <path d="M50 100 Q20 80 20 60" fill="none" stroke="#4A7023" strokeWidth="2" />
            <path d="M50 100 Q80 80 80 60" fill="none" stroke="#4A7023" strokeWidth="2" />

            {/* Tulip 1 */}
            <path d="M25 60 Q20 40 35 35 Q50 40 45 60 Z" fill="#FF69B4" stroke="#DC143C" />

            {/* Tulip 2 */}
            <path d="M55 60 Q50 40 65 35 Q80 40 75 60 Z" fill="#FF69B4" stroke="#DC143C" />
        </g>
    </svg>
);

// 6. Red Poppy
const FlowerPoppy: React.FC = () => (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 10) scale(0.8)">
            {/* Stem */}
            <path d="M50 110 L50 60" stroke="#4A7023" strokeWidth="3" />
            <path d="M50 100 Q30 90 20 80" fill="#8FBC8F" stroke="#4A7023" />
            <path d="M50 100 Q70 90 80 80" fill="#8FBC8F" stroke="#4A7023" />

            {/* Poppy */}
            <path d="M30 50 Q50 20 70 50 Q50 80 30 50" fill="#CD5C5C" stroke="#8B0000" />
            <path d="M30 50 Q20 40 30 30 Q40 40 30 50" fill="#F08080" />
            <path d="M70 50 Q80 40 70 30 Q60 40 70 50" fill="#F08080" />

            <circle cx="50" cy="50" r="7" fill="#2F4F4F" />
            <circle cx="50" cy="50" r="2" fill="#000" />
        </g>
    </svg>
);

// 7. Wrapped Sunflower Bouquet (New Replacement)
const FlowerSunflowerBouquet: React.FC = () => (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(10, 5) scale(0.8)">
            {/* Wrapper Paper Back */}
            <path d="M20 30 L10 50 L50 110 L90 50 L80 30" fill="#F5F5DC" stroke="#D2B48C" strokeWidth="1" />
            <path d="M10 50 Q50 60 90 50" fill="none" stroke="#D2B48C" strokeWidth="1" />

            {/* Greenery / Leaves */}
            <path d="M30 40 L20 20" stroke="#2E8B57" strokeWidth="2" />
            <path d="M70 40 L80 20" stroke="#2E8B57" strokeWidth="2" />
            <circle cx="20" cy="20" r="3" fill="#2E8B57" />
            <circle cx="80" cy="20" r="3" fill="#2E8B57" />
            <path d="M40 30 L40 10" stroke="#2E8B57" strokeWidth="1.5" />
            <path d="M60 30 L60 10" stroke="#2E8B57" strokeWidth="1.5" />

            {/* Sunflowers */}
            {/* Top Center */}
            <g transform="translate(50, 35)">
                <circle cx="0" cy="0" r="12" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <ellipse key={i} cx="0" cy="-8" rx="3" ry="6" fill="#FFD700" stroke="#DAA520" transform={`rotate(${angle})`} />
                ))}
                <circle cx="0" cy="0" r="6" fill="#3E2723" />
            </g>

            {/* Left */}
            <g transform="translate(30, 55)">
                <circle cx="0" cy="0" r="10" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <ellipse key={i} cx="0" cy="-7" rx="2.5" ry="5" fill="#FFD700" stroke="#DAA520" transform={`rotate(${angle})`} />
                ))}
                <circle cx="0" cy="0" r="5" fill="#3E2723" />
            </g>

            {/* Right */}
            <g transform="translate(70, 55)">
                <circle cx="0" cy="0" r="10" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <ellipse key={i} cx="0" cy="-7" rx="2.5" ry="5" fill="#FFD700" stroke="#DAA520" transform={`rotate(${angle})`} />
                ))}
                <circle cx="0" cy="0" r="5" fill="#3E2723" />
            </g>

            {/* Wrapper Front Folds */}
            <path d="M30 60 L50 110 L70 60 Q50 80 30 60" fill="#FAF0E6" stroke="#D2B48C" strokeWidth="1" opacity="0.8" />

            {/* Ribbon */}
            <path d="M40 85 Q50 95 60 85" fill="none" stroke="#DAA520" strokeWidth="3" />
            <path d="M50 90 L40 105" stroke="#DAA520" strokeWidth="3" />
            <path d="M50 90 L60 105" stroke="#DAA520" strokeWidth="3" />
            <circle cx="50" cy="90" r="3" fill="#DAA520" />
        </g>
    </svg>
);

// 8. Lush Corner Cluster (New Replacement for CornerFlower)
// Now accepts `style` prop to handle rotation per instance
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

// --- Data ---

interface Message {
    id: number;
    title: string;
    content: string;
    icon: React.ComponentType;
    imageName: string; // Filename in public/ folder
}

const flowers: Message[] = [
    { id: 1, title: "Nếu hôm nay là ngày mưa", content: "Liệu trời có làm cho em buồn hông,\n Nếu em có buồn thì hãy nhớ,\nLuôn có anh sẵn sàng che ô cho em nhé! ☔", icon: FlowerRoles, imageName: "bouquet1.png" },
    { id: 2, title: "Cho những ngày nắng", content: "Nắng lên rồi phải hông ta! ☀️\nHay đó là nụ cười rạng rỡ của em hôm nay.\nYêu em cũng như mặt trời của anh! ❤️", icon: FlowerSunflowerBouquet, imageName: "bouquet2.png" },
    { id: 3, title: "Khi cuộc sống làm em thấy mệt", content: "Nếu mệt quá thì nghỉ ngơi xíu nhé.\nĐừng cố quá sức.\nVai anh đây, lúc nào cũng sẵn sàng để em dựa vào. 🧸", icon: FlowerIris, imageName: "bouquet3.png" },
    { id: 4, title: "Lời yêu anh gửi em", content: "Có một điều anh muốn nói...\nĐó là...\nAnh nhớ em nhiều lắm! 🤫💕", icon: FlowerSunflower, imageName: "bouquet4.png" },
    { id: 5, title: "Lời cảm ơn anh gửi em", content: "Cảm ơn em vì đã đến bên đời anh.\n Có thể em đến hơi muộn.\nNhưng không sao, sự hiện diện của em là món quà tuyệt vời nhất. 🎁", icon: FlowerTulips, imageName: "bouquet5.png" },
    { id: 6, title: "Tình yêu của chúng ta", content: "Không cần ngày đặc biệt,\nChỉ cần là em,\nthì ngày nào cũng là ngày Valentine. 🌹", icon: FlowerPoppy, imageName: "bouquet6.png" },
];

// Corner Wrappers for ImageOrSVG Fallback
// Apply transforms directly to the SVG component, NOT the container
const CornerTL = () => <LushCorner />; // No transform
const CornerTR = () => <LushCorner style={{ transform: 'scaleX(-1)' }} />;
const CornerBL = () => <LushCorner style={{ transform: 'scaleY(-1)' }} />;
const CornerBR = () => <LushCorner style={{ transform: 'scale(-1)' }} />;

const LovePage: React.FC = () => {
    const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

    return (
        <div className="love-page-container">
            {/* Corner Decorations */}
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

            {/* Welcome Board */}
            <div className="welcome-board-container">
                <div className="welcome-board">
                    <div className="board-inner">
                        <h1 className="board-text">Chào mừng đến với<br />tiệm hoa
                            của riêng anh</h1>
                    </div>
                </div>
            </div>

            {/* Flower Shelves */}
            <div className="shop-shelves-container">
                {/* Row 1 */}
                <div className="shelf-row">
                    {flowers.slice(0, 3).map((flower) => (
                        <div key={flower.id} className="bouquet-item" onClick={() => setSelectedMessage(flower)}>
                            <ImageOrSVG imageName={flower.imageName} SvgComponent={flower.icon} alt={flower.title} />
                            <div className="bouquet-tag">{flower.title}</div>
                        </div>
                    ))}
                </div>

                {/* Row 2 */}
                <div className="shelf-row">
                    {flowers.slice(3, 6).map((flower) => (
                        <div key={flower.id} className="bouquet-item" onClick={() => setSelectedMessage(flower)}>
                            <ImageOrSVG imageName={flower.imageName} SvgComponent={flower.icon} alt={flower.title} />
                            <div className="bouquet-tag">{flower.title}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Letter Modal */}
            {selectedMessage && (
                <div className="letter-modal-overlay" onClick={() => setSelectedMessage(null)}>
                    <div className="letter-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedMessage(null)}>✖</button>
                        <h2 style={{ fontFamily: 'Dancing Script', color: '#DB7093', fontSize: '2rem' }}>{selectedMessage.title}</h2>
                        <div className="letter-text">
                            {selectedMessage.content}
                        </div>
                        <div className="stamp">WITH LOVE</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LovePage;
