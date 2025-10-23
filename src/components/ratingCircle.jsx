import { useState } from 'react';

const RatingCircles = ({ attribute, label }) => {

    const [ratings, setRatings] = useState({
        body: 0,
        mouthFeel: 0,
        balance: 0,
        sweetness: 0,
        linger: 0
    });

    const handleRatingClick = (attribute, value) => {
        setRatings(prev => ({ ...prev, [attribute]: value }));
    };

    return (
        <div className="mb-5">
            <div className="text-sm mb-2 text-gray-600">{label}</div>
            <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(value => (
                <div
                    key={value}
                    onClick={() => handleRatingClick(attribute, value)}
                    className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-all ${
                    ratings[attribute] >= value
                        ? 'bg-gray-800 border-gray-800'
                        : 'border-gray-300 hover:border-gray-500'
                    }`}
                />
                ))}
            </div>
        </div>
    )
};

export default RatingCircles;