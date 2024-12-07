import React from "react";
import Home from "./Home";
import "../Design/Home.css"
function InputSection({ inputValue, handleInputChange, handleGenerate }) {
    return (
        <div className="left-block bg-gray-900 text-white p-8 rounded-lg ml-1">
            <h1 className="text-3xl font-bold mb-4">AI-Image Generator</h1> 
            <div className="input-container">
                <p>Ignite your imagination with the power of Artificial Intelligence (AI). Craft mesmerizing images through vivid text descriptions.</p>
                <h4 className="text-xl font-bold mt-4 mb-2">Prompt</h4>
                <p className="text-gray-400">Type a very descriptive text of the image you wish to generate</p>
                <input
                    type="text"
                    placeholder="Type"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="input w-full py-3 px-4 mb-4 bg-gray-800 border border-gray-600 rounded"
                />
                <button
                    id="b1"
                    onClick={handleGenerate}
                    className="bg-orange-600 text-white py-3 px-6 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
                >
                    Generate Image
                </button>
            </div>
        </div>
    );
}

export default InputSection;
