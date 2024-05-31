import React from 'react';
import UnsubscribeForm from './UnsubscribeForm';

const CancelSubscription = () => {

    const description = "We are sorry to see you go! We understand that our updates might not have met your needs this time. Your feedback is valuable to us, and we are constantly striving to improve our content and services. If you ever wish to rejoin our community, you can subscribe again to stay informed about the latest news, financial reports, and investor announcements. Thank you for being a part of our journey."

    const additionalMessage = "If you have any suggestions or feedback, please dont hesitate to let us know. Your insights help us serve you better!"

    return (
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
            <div>
                <div className="text-2xl font-bold mb-4">We are Sorry to See You Go</div>
                <p>{description}</p>
                <p>{additionalMessage}</p>
            </div>
            <div>
                <UnsubscribeForm />
            </div>
        </div>
    );
};

export default CancelSubscription;
