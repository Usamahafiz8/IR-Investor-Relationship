

import React from 'react';
import FreeSubscribeForm from './FreeSubscriptionForm';

const FreeSubscribe = () => {


    const description = "                Stay informed about the latest news, financial reports, and investor announcements by subscribing to our updates. As a subscriber, you'll receive timely notifications straight to your inbox, ensuring you're always up-to-date with our company's developments."
    const descriptio1 = "Feel free to customize the content according to your company's specific offerings and branding guidelines!"
    return (
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
        {/* Left Section - Service Details */}
            <div>
                <div className="text-2xl font-bold mb-4 ">Why Subscribe?
                </div>
                {description}
                <p>{descriptio1}</p>
            </div>

            {/* Right Section - Subscription Form */}
            <FreeSubscribeForm />
        </div>
    );
};

export default FreeSubscribe;
