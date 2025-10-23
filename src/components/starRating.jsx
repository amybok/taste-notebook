import { useState } from "react";

const StarRating = () => {
    const [starRating, setStarRating] = useState(0);

    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(rating => (
            <svg
                key={rating}
                onClick={() => setStarRating(rating)}
                className="w-8 h-8 cursor-pointer"
                viewBox="0 0 24 24"
                fill={starRating >= rating ? '#ffd600' : 'none'}
                stroke={starRating >= rating ? '#ffd600' : '#ccc'}
                strokeWidth="2"
            >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            ))}
		</div>
    );
};

export default StarRating;