import React from "react";

function ImageDisplay({ imageUrl, error, loading, handleDownload }) {
    return (
        <div className="right-block bg-gray-900 p-8 rounded-lg ml-1">
            {loading ? (
                <div className="spinner"></div>
            ) : (
                <div>
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <>
                            <img
                                src={imageUrl || "mountain.jpg"}
                                alt="Generated Image"
                                className="max-w-full mb-4"
                                style={{ maxHeight: "63vh" }} // Adjust the maxHeight here
                            />
                            <div className="download-button">
                                <button
                                    onClick={handleDownload}
                                    className="bg-orange-600 text-white py-3 px-6 rounded-full hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
                                >
                                    Download
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default ImageDisplay;
