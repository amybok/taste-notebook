import React, { useState, useEffect, useRef } from 'react';
import vibe from "../assets/vibe.png"

const PhotoCard = () => {
    return (
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="w-70 h-90 overflow-clip">
                <img src={vibe} style={{objectFit:"cover", width:"100%", height:"100%", borderRadius:"5px"}}/>
            </div>
            <h2 className="text-2xl tracking-widest mb-8 text-gray-800 font-light text-left mt-8">NAME</h2>
        </div>
    )

}

export default PhotoCard;