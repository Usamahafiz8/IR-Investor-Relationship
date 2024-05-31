'use client';
import React, { useState } from 'react';

const UnsubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleUnsubscribe = async (event:any) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/strip/get-customer-id', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to get customer ID');
            }

            const customerId = data.customerId;

            const portalResponse = await fetch('/api/strip/strip-customer-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ customerId, returnUrl:"https://ir-investor-relationship.vercel.app/" })
            });

            const portalData = await portalResponse.json();

            if (!portalResponse.ok) {
                throw new Error(portalData.error || 'Failed to create customer portal session');
            }

            // window.location.href = portalData.url;
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="unsubscribe-form">
            <h2 className="text-2xl font-bold mb-4">Unsubscribe from Our Mailing List and Subscription Plan</h2>
            <form onSubmit={handleUnsubscribe}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <button
                    type="submit"
                    className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Unsubscribe
                </button>
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
        </div>
    );
};

export default UnsubscribeForm;
