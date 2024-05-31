"use client";
import React, { useState, useEffect } from 'react';

interface Subscription {
    id: string;
    status: string;
    current_period_start: number;
    current_period_end: number;
    cancel_at_period_end: boolean;
    canceled_at?: number;
    items: {
        id: string;
        quantity: number;
        price: {
            id: string;
        };
    }[];
}

interface Customer {
    name: string;
    email: string;
}

interface Props {
    customerID: string;
}

const SubscriptionConfirmation: React.FC<Props> = ({ customerID }) => {
    const [loading, setLoading] = useState(true);
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/strip/updated-subInformation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ customerId: customerID }),
                });

                const data = await res.json();

                if (!res.ok) {
                    throw new Error(data.error.message);
                }

                setCustomer(data.customer);
                setSubscriptions(data.subscriptions);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:');
            }
        };

        fetchData();
    }, [customerID]);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Confirmation</h1>
            {loading ? (
                <p>Please wait...</p>
            ) : (
                <div>
                    <div>
                        <p>This &nbsp;
                            <b>
                                {customer?.email}
                            </b> &nbsp;
                            is currently Unsubscribed to receive reports and announcements.</p>
                    </div>
                </div>
            )}
        </div>

    );
};

export default SubscriptionConfirmation;
