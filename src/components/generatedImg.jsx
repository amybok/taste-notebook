// React code example using usepollinationsImage hook

import { usePollinationsImage } from '@pollinations/react';

const GeneratedImageComponent = ({ input }) => {
    console.log(input)
    const imageUrl = usePollinationsImage("make an abstract smooth, seamless blend gradient with clean, minimalist style reflecting " + input, {
        width: 1024,
        height: 1024,
        seed: 23972,
        model: 'flux'
    });
    console.log(imageUrl)

    return (
        <div className="w-70 h-90 overflow-clip">
        {imageUrl ? <img src={imageUrl} alt="Generated Image" style={{objectFit:"cover", width:"100%", height:"100%", borderRadius:"5px"}}/> : <p>Loading...</p>}

        </div>
    );
};

export default GeneratedImageComponent;