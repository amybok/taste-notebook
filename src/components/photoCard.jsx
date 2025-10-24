import vibe from "../assets/vibe.png"
import chigi from "../assets/chigi.png"
//import.meta.env.VITE_APP_GEMINI_API_KEY
//import { GoogleGenAI } from "@google/genai";
import GeneratedImageComponent from "./generatedImg";


//const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_APP_GEMINI_API_KEY });
// Strawberry Jam and Vanilla and Pandan and White Peony Tea
const input = "chocolate, cherry and berries jam and silky mouthfeel"
// async function gemini() {
//     


//     const response = await ai.models.generateContent({
//         model: "gemini-2.5-flash-image",
//         contents: prompt,
//     });

//     let output

//     for (const part of response.candidates[0].content.parts) {
//         if (part.text) {
//             console.log(part.text);
//         } 
//         else if (part.inlineData) {
//             console.log("hello")
//             const imageData = part.inlineData.data;
//             const buffer = Buffer.from(imageData, "base64");
//             console.log(buffer);
//             output = buffer.toString()
//         }
//     }
//     return output
// }

const PhotoCard = () => {
    //gemini()

    //console.log("make an abstract smooth, seamless blend gradient with clean, minimalist style reflecting " + input)

    return (
        <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto">
            
            {/* <GeneratedImageComponent input={input}/> */}
            <div className="w-70 h-90 overflow-clip">
                <img src={chigi} style={{objectFit:"cover", width:"100%", height:"100%", borderRadius:"5px"}}/>
            </div>
            
            <div className="justify-between flex">
                <h2 className="text-[1.35rem] tracking-widest mb-5 text-gray-800 font-light mt-8">NAME</h2>
                <textarea className="text-[1.35rem] tracking-widest mb-5 text-gray-800 font-light mt-8 text-right max-w-45"
                        placeholder="Add name..."/>
                {/* <h2 className="text-2xl tracking-widest mb-8 text-gray-800 font-light mt-8 text-right max-w-45">{"Chigi no shiro"}</h2> */}
            </div>
            <div className="justify-between flex">
                <h3 className="text-[1rem] tracking-widest mb-4 text-gray-800 font-light text-left">REGION</h3>
                <textarea className="text-[1rem] tracking-widest mb-4 text-gray-800 font-light text-right max-w-45"
                        placeholder="Add region..."/>
                {/* <h3 className="text-xl tracking-widest mb-8 text-gray-800 font-light text-right max-w-45">{"Uji"}</h3> */}
            </div>
            <div className="justify-between flex">
                <h3 className="text-[1rem] tracking-widest mb-4 text-gray-800 font-light text-left">BRAND</h3>
                <textarea className="text-[1rem] tracking-widest mb-4 text-gray-800 font-light text-right max-w-45"
                        placeholder="Add brand..."/>
                {/* <h3 className="text-xl tracking-widest mb-8 text-gray-800 font-light text-right max-w-45">{"Marukyu Koyamaen"}</h3> */}
            </div>
            <div className="justify-between flex">
                <h3 className="text-[1rem] tracking-widest mb-4 text-gray-800 font-light text-left">PREPARATION</h3>
                <textarea className="text-[1rem] tracking-widest mb-4 text-gray-800 font-light text-right max-w-45"
                        placeholder="Add method..."/>
                {/* <h3 className="text-xl tracking-widest mb-8 text-gray-800 font-light text-right max-w-45">{"Marukyu Koyamaen"}</h3> */}
            </div>
        </div>
    )

}

export default PhotoCard;