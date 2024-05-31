'use client';
import React, { useState } from 'react';

const FreeSubscribeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'free',
    });
    const [message, setMessage] = useState<string>('');
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/subscribe-digest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    type: 'free',
                }),
            });

            const data = await response.json();

            if (response.ok) {
                showMessageWithTimeout('Subscription successful!', true);
                setFormData({ name: '', email: '', type: 'free' }); // Reset form fields
            } else {
                showMessageWithTimeout(`${data.message}`, false);
            }
        } catch (error) {
            showMessageWithTimeout('An error occurred. Please try again.', false);
        }
    };

    const showMessageWithTimeout = (message: string, success: boolean) => {
        setShowMessage(true);
        setMessage(message);
        setTimeout(() => {
            setShowMessage(false);
        }, 5000);
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="text-2xl font-bold mb-4">Subscribe To Our Free Digest</div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                <label className="block">
                    <span className="text-gray-700">Name</span>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 block w-full border p-2 rounded"
                        placeholder="Your name"
                        required
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700">Email</span>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 block w-full border p-2 rounded"
                        placeholder="Your email"
                        required
                    />
                </label>
                <button
                    type="submit"
                    className={`px-4 py-2 text-white bg-[#eec78c] hover:bg-black ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading} // Disable button while loading
                >
                    {loading ? 'Processing...' : 'Subscribe'}
                </button>
            </form>
            {showMessage && (
                <p className={`mt-4 text-center ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default FreeSubscribeForm;
