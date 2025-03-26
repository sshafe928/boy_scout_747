import React, { useEffect, useState } from 'react';
import Adder from "../adminComponents/actions/Adder";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const Photos = () => {
    const [formattedPhotos, setFormattedPhotos] = useState([]);
    const [editingPhotoId, setEditingPhotoId] = useState(null);
    const [editingPhoto, setEditingPhoto] = useState({});

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
                        image_url: photo.image_url,
                        id: photo._id,
                    }));
                    setFormattedPhotos(formatted);
                } else {
                    console.error('Failed to fetch photos:', data.message);
                }
            })
            .catch((err) => console.error('Error fetching photos:', err));
    }, []);

    const handleEdit = (photo) => {
        setEditingPhotoId(photo.id);
        setEditingPhoto({ ...photo });
    };

    const handleChange = (e) => {
        setEditingPhoto({ ...editingPhoto, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        fetch(`http://localhost:5000/api/photos/${editingPhotoId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editingPhoto),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    const updatedPhotos = formattedPhotos.map((photo) =>
                        photo.id === editingPhotoId ? { ...editingPhoto, id: editingPhotoId } : photo
                    );
                    setFormattedPhotos(updatedPhotos);
                    setEditingPhotoId(null);
                    setEditingPhoto({});
                } else {
                    console.error("Failed to update photo:", data.message);
                }
            })
            .catch((err) => console.error("Error updating photo:", err));
    };

    const handleDelete = (photoId) => {
        if (window.confirm("Are you sure you want to delete this photo?")) {
            fetch(`http://localhost:5000/api/photos/${photoId}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setFormattedPhotos(formattedPhotos.filter((photo) => photo.id !== photoId));
                    } else {
                        console.error("Failed to delete photo:", data.message);
                    }
                })
                .catch((err) => console.error("Error deleting photo:", err));
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-6xl">
            <h1 className="text-3xl font-bold text-center mb-8 text-amber-400">Photos</h1>
            {formattedPhotos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {formattedPhotos.map((photo) => (
                        <div
                            key={photo.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="p-4">
                                {editingPhotoId === photo.id ? (
                                    // Editable Fields
                                    <>
                                        <input
                                            type="text"
                                            name="title"
                                            value={editingPhoto.title}
                                            onChange={handleChange}
                                            className="w-full border p-2 rounded mb-2"
                                            placeholder="Title"
                                        />
                                        <input
                                            type="text"
                                            name="description"
                                            value={editingPhoto.description}
                                            onChange={handleChange}
                                            className="w-full border p-2 rounded mb-2"
                                            placeholder="Description"
                                        />
                                        <input
                                            type="text"
                                            name="image_url"
                                            value={editingPhoto.image_url}
                                            onChange={handleChange}
                                            className="w-full border p-2 rounded mb-2"
                                            placeholder="Image URL"
                                        />
                                        <div className="flex gap-2">
                                            <button
                                                onClick={handleSave}
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() => setEditingPhotoId(null)}
                                                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    // Normal Display Mode
                                    <>
                                        {photo.image_url && (
                                            <img
                                                src={photo.image_url}
                                                alt={photo.title}
                                                className="w-full h-48 object-cover mb-4"
                                            />
                                        )}
                                        <h2 className="text-lg font-semibold mb-2">{photo.title}</h2>
                                        <p className="text-gray-600">{photo.description}</p>
                                        <div className="mt-4 flex gap-2">
                                            <button
                                                onClick={() => handleEdit(photo)}
                                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                                            >
                                                <FaEdit className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(photo.id)}
                                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                                            >
                                                <FaRegTrashAlt className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No photos available.</p>
            )}
            <div className="mt-8">
                <Adder type="photo" />
            </div>
        </div>
    );
};

export default Photos;