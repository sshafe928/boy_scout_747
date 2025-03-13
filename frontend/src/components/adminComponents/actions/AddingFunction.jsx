import { React, useState } from 'react';

export function EventAdder() {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        description: '',
        location: '',
        start: '',
        end: '',
        img_url: '', // This will hold the image URL from Cloudinary
    });

    const [selectedFile, setSelectedFile] = useState(null); // To track selected image

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedFile) {
            // Create FormData to send the image to the backend
            const formDataToSend = new FormData();
            formDataToSend.append('image', selectedFile);

            // Upload the image to Cloudinary via backend
            fetch('http://localhost:5000/admin/uploadPhoto', {
                method: 'POST',
                body: formDataToSend,
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        const newEvent = {
                            title: formData.title,
                            type: formData.type,
                            description: formData.description,
                            location: formData.location,
                            start: formData.start,
                            end: formData.end,
                            img_url: data.imageUrl, // Use the returned Cloudinary URL
                        };

                        // Now, send the event data to your events API
                        fetch('http://localhost:5000/api/events', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(newEvent),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.success) {
                                    alert('Event added successfully!');
                                    setFormData({
                                        title: '',
                                        type: '',
                                        description: '',
                                        location: '',
                                        start: '',
                                        end: '',
                                        img_url: '',
                                    });
                                    setSelectedFile(null); // Clear file after submission
                                } else {
                                    alert('Failed to add event:', data.message);
                                }
                            })
                            .catch((err) => {
                                alert('Error adding event:', err.message);
                            });
                    } else {
                        alert('Failed to upload image:', data.message);
                    }
                })
                .catch((err) => {
                    alert('Error uploading image:', err.message);
                });
        } else {
            alert('Please select an image first.');
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Event</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Event Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="type"
                    placeholder="Event Type"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="description"
                    placeholder="Event Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Event Location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="datetime-local"
                        name="start"
                        value={formData.start}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="datetime-local"
                        name="end"
                        value={formData.end}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <label className="block">
                    <span className="text-gray-700">Upload Image:</span>
                    <input
                        id="image-upload"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange} // Handle file change
                        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 cursor-pointer"
                        required
                    />
                </label>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}


export function GalleryAdder() {
    const [formData, setFormData] = useState({
        title: '',
        uploaded_at: '',
        description: '',
        tags: '',
        uploader: '',
        image_url: '',
    });

    const [selectedFile, setSelectedFile] = useState(null); // To track selected image

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (selectedFile) {
            // Create FormData to send the image to the backend
            const formDataToSend = new FormData();
            formDataToSend.append('image', selectedFile);

            // Upload the image to Cloudinary via backend
            fetch('http://localhost:5000/admin/uploadPhoto', {
                method: 'POST',
                body: formDataToSend,
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        const newPhoto = {
                            title: formData.title,
                            tags: formData.tags,
                            description: formData.description,
                            uploader: formData.uploader,
                            uploaded_at: formData.uploaded_at,
                            image_url: data.imageUrl, // Use the returned Cloudinary URL
                        };

                        // Now, send the event data to your events API
                        fetch('http://localhost:5000/api/photos', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(newPhoto),
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.success) {
                                    alert('Photo added successfully!');
                                    setFormData({
                                        title: '',
                                        uploader: '',
                                        description: '',
                                        uploaded_at: '',
                                        tags: '',
                                        image_url: '',
                                    });
                                    setSelectedFile(null); // Clear file after submission
                                } else {
                                    alert('Failed to add photo:', data.message);
                                }
                            })
                            .catch((err) => {
                                alert('Error adding photo:', err.message);
                            });
                    } else {
                        alert('Failed to upload image:', data.message);
                    }
                })
                .catch((err) => {
                    alert('Error uploading image:', err.message);
                });
        } else {
            alert('Please select an image first.');
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Photo</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Photo Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="uploader"
                    placeholder="Photo Uploader"
                    value={formData.type}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    name="description"
                    placeholder="Photo Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24"
                />
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="string"
                        name="tags"
                        placeholder="Photo Tags"
                        value={formData.start}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input
                        type="string"
                        name="image_url"
                        placeholder="Photo Image URL"
                        value={formData.start}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* <label className="block">
                    <span className="text-gray-700">Upload Image:</span>
                    <input
                        id="image-upload"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange} // Handle file change
                        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 cursor-pointer"
                        required
                    />
                </label> */}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export function AdminAdder() {
    return <h1 className="text-2xl font-bold text-center text-gray-800">hi</h1>;
}

export function NewsAdder() {
    return <h1 className="text-2xl font-bold text-center text-gray-800">hi</h1>;
}

export function FormAdder() {
    return <h1 className="text-2xl font-bold text-center text-gray-800">hi</h1>;
}
