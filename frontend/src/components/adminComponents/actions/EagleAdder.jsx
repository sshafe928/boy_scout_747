import React, { useState } from 'react';

function EagleAdder() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        rank: '',
        type: 'eagle', 
    });
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedProjectFile, setSelectedProjectFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const handleProjectFileChange = (e) => {
        const file = e.target.files[0];
        if (file && !file.type.startsWith('image/')) {
            setError('Please select a valid image file (jpg, png, jpeg, gif) for project image');
            return;
        }
        setSelectedProjectFile(file);
        setError(null);
    };

    const validateForm = () => {
        if (!formData.name || !formData.description || !formData.date || !formData.rank) {
            setError('All fields are required');
            return false;
        }
        if (!selectedFile || !selectedProjectFile) {
            setError('Please select both images');
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
            formDataToSend.append('image', selectedFile);
            formDataToSend.append('projectImage', selectedProjectFile); 
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('date', formData.date);
            formDataToSend.append('rank', formData.rank);
            formDataToSend.append('type', formData.type); 

            const response = await fetch('http://localhost:5000/api/admin/uploadPhoto', {
                method: 'POST',
                body: formDataToSend,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Request failed! Status: ${response.status}, Response: ${errorText}`);
            }

            const data = await response.json();
            console.log('Response:', data);

            if (data.success) {
                alert('Eagle added successfully!');
                setFormData({
                    name: '',
                    description: '',
                    date: '',
                    rank: '',
                    type: 'eagle', 
                });
                setSelectedFile(null);
                setSelectedProjectFile(null);
                document.getElementById('image-upload').value = ''; 
                document.getElementById('project-image-upload').value = ''; 
            } else {
                throw new Error(data.message || 'Eagle creation failed');
            }
        } catch (err) {
            console.error('Error:', err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Eagle Scout</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Eagle Scout Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 h-24" 
                />
                <input 
                    type="text" 
                    name="date" 
                    placeholder="Date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="text" 
                    name="rank" 
                    placeholder="Rank" 
                    value={formData.rank} 
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
                        required 
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Upload Project Image:</span>
                    <input 
                        id="project-image-upload" 
                        type="file" 
                        name="projectImage" 
                        accept="image/*" 
                        onChange={handleProjectFileChange} 
                        disabled={isLoading}
                        className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg p-2 cursor-pointer" 
                        required 
                    />
                </label>
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full py-3 rounded-lg transition duration-200 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>
    );
}

export default EagleAdder;
