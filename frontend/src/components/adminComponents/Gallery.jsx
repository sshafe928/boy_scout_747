import React, { useEffect, useState } from 'react';
import Adder from "../adminComponents/actions/Adder"

    const Photos = () => {
    const [formattedPhotos, setFormattedPhotos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/photos')
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
            const formatted = data.data.map((photo) => ({
                title: photo.title,
                uploaded_at: photo.uploaded_at,
                description: photo.description,
                tags: photo.tags,
                uploader: photo.uploader,
                img_url: photo.image_url,
            }));
            setFormattedPhotos(formatted);
            } else {
            console.error('Failed to fetch photos:', data.message);
            }
        })
        .catch((err) => console.error('Error fetching photos:', err));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8">Photos</h1>
        {formattedPhotos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formattedPhotos.map((photo, index) => (
                <div key={index}  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                {photo.img_url && (
                    <img src={photo.img_url} alt={photo.title} className="w-full h-48 object-cover"/>
                )}
                <div className="p-4">
                    <h1>{photo.description}</h1>
                    <div className="mt-4 flex gap-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                        Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors">
                        Delete
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        ) : (
            <p className="text-center text-gray-500">No photos available.</p>
        )}
        <div className="mt-8">
            <Adder type="photo"/>
        </div>
        </div>
    );
};

export default Photos;