import { React, useState } from 'react';

function AdminAdder() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        if (!formData.email || !formData.password) {
            setError('All fields are required');
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
            const body = {
                email: formData.email,
                password: formData.password, 
            };

            console.log('Sending data:', body);

            const response = await fetch('http://localhost:5000/api/admin/createAdmin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Request failed! Status: ${response.status}, Response: ${errorText}`);
            }

            const data = await response.json();
            console.log('Response:', data);

            if (data.success) {
                alert('Admin created successfully!');
                setFormData({
                    email: '',
                    password: '',
                });
            } else {
                throw new Error(data.message || 'Admin creation failed');
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Admin</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Admin Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                    disabled={isLoading}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                />
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
        </div>
    );
}

export default AdminAdder;
