import vibe from "../assets/vibe.png"
import.meta.env.GEMINI_API_KEY


const PhotoCard = () => {
    return (
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="w-70 h-90 overflow-clip">
                <img src={vibe} style={{objectFit:"cover", width:"100%", height:"100%", borderRadius:"5px"}}/>
            </div>
            <div className="justify-between flex">
                <h2 className="text-2xl tracking-widest mb-3 text-gray-800 font-light mt-8">NAME</h2>
                <h2 className="text-2xl tracking-widest mb-3 text-gray-800 font-light mt-8 text-right max-w-45">{"Chigi no shiro"}</h2>
            </div>
            <div className="justify-between flex">
                <h3 className="text-xl tracking-widest mb-8 text-gray-800 font-light text-left">REGION</h3>
                <h3 className="text-xl tracking-widest mb-8 text-gray-800 font-light text-right max-w-45">{"Uji"}</h3>
            </div>
            
        </div>
    )

}

export default PhotoCard;