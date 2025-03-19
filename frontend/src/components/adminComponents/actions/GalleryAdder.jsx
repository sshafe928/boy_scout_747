import { React, useState, useEffect } from 'react';

function GalleryAdder({ photoId }) {
    const [formData, setFormData] = useState({
        title: '',
        type: 'photo',
        description: '',
        tags: '',
        uploader: '',
        uploaded_at: '',
        img_url: '',
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (photoId) {
            fetch(`http://localhost:5000/api/photos/${photoId}`)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        setFormData({
                            title: data.data.title,
                            type: data.data.type,
                            description: data.data.description,
                            tags: data.data.tags,
                            uploader: data.data.uploader,
                            uploaded_at: data.data.uploaded_at,
                            img_url: data.data.img_url,
                        });
                    } else {
                        setError(data.message || 'Failed to fetch photo details');
                    }
                })
                .catch(err => setError('Error fetching photo details'));
        }
    }, [photoId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && !file.type.startsWith('image/')) {
            setError('Please select a valid image file (jpg, png, jpeg, gif)');
            return;
        }
        setSelectedFile(file);
        setError(null);
    };

    const validateForm = () => {
        if (!formData.title || !formData.description || !formData.uploader || !formData.uploaded_at) {
            setError('All text fields are required');
            return false;
        }
        if (!selectedFile && !formData.img_url) {
            setError('Please select an image or keep the existing image');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        if (!validateForm()) {
            setIsLoading(false);
            return;
        }

        try {
            const formDataToSend = new FormData();
            if (selectedFile) {
                formDataToSend.append('image', selectedFile);
            }
            formDataToSend.append('title', formData.title);
            formDataToSend.append('type', formData.type);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('tags', formData.tags);
            formDataToSend.append('uploader', formData.uploader);
            formDataToSend.append('uploaded_at', formData.uploaded_at);

            const response = await fetch(
                photoId
                    ? `http://localhost:5000/api/photos/${photoId}` 
                    : 'http://localhost:5000/api/admin/uploadPhoto', 
                {
                    method: photoId ? 'PUT' : 'POST',
                    body: formDataToSend,
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Request failed! Status: ${response.status}, Response: ${errorText}`);
            }

            const data = await response.json();
            if (data.success) {
                alert('Photo added/updated successfully!');
                setFormData({
                    title: '',
                    type: 'photo',
                    description: '',
                    tags: '',
                    uploader: '',
                    uploaded_at: '',
                    img_url: '',
                });
                setSelectedFile(null);
            } else {
                throw new Error(data.message || 'Photo creation failed');
            }
        } catch (err) {
            console.error('Error:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this photo?')) {
            try {
                setIsLoading(true);
                const response = await fetch(`http://localhost:5000/api/photos/${photoId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Request failed! Status: ${response.status}, Response: ${errorText}`);
                }

                const data = await response.json();
                if (data.success) {
                    alert('Photo deleted successfully!');
                } else {
                    throw new Error(data.message || 'Photo deletion failed');
                }
            } catch (err) {
                console.error('Error:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{photoId ? 'Edit Photo' : 'Add New Photo'}</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Photo Title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <textarea 
                    name="description" 
                    placeholder="Photo Description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24" 
                />
                <input 
                    type="text" 
                    name="tags" 
                    placeholder="Photo Tags" 
                    value={formData.tags} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="text" 
                    name="uploader" 
                    placeholder="Uploader" 
                    value={formData.uploader} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="datetime-local" 
                    name="uploaded_at" 
                    value={formData.uploaded_at} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <label className="block">
                    <span className="text-gray-700">Upload Image:</span>
                    <input 
                        id="image-upload" 
                        type="file" 
                        name="image" 
                        accept="image/*" 
                        onChange={handleFileChange} 
                        disabled={isLoading}
                        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 cursor-pointer" 
                    />
                </label>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full py-3 rounded-lg transition duration-200 ${
                        isLoading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {photoId && (
                <button 
                    onClick={handleDelete} 
                    className="w-full py-3 mt-4 bg-red-500 hover:bg-red-600 text-white rounded-lg"
                    disabled={isLoading}
                >
                    {isLoading ? 'Deleting...' : 'Delete Photo'}
                </button>
            )}
        </div>
    );
}

export default GalleryAdder;
