import React from 'react';
import PremiumSubscribeForm from './Strip.jsx';

const description = "Stay informed about the latest news, financial reports, and investor announcements by subscribing to our updates. As a subscriber, you'll receive timely notifications straight to your inbox, ensuring you're always up-to-date with our company's developments.";
const description1 = "Feel free to customize the content according to your company's specific offerings and branding guidelines!";
const subscriptionBenefits = [
    "Receive Initiation Reports PROMPTLY as they are sent out to the marketplace.",
    "Access the FULL REPORT CATALOG on any company we cover.",
    "Receive the DAILY ALERT EMAIL, containing all of the day's updates, around 5 p.m. EST.",
    "Access to REAL-TIME EMAIL ALERTS for any companies covered by Zacks SCR analysts."
];
const premiumDetails = "Premium Is $5 Per Month Or $50 Per Year";
const note = "Login Details And Instructions Will Be Emailed To You Within 24 Hours Of Payment.";
const subscribeText = "Subscribe To Investor Radar";

const PremiumSubscribe = () => {
    return (
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2">
            <div>
                <div className="text-2xl font-bold mb-4">Why Investor Radar Premium?</div>
                <ul>
                    {subscriptionBenefits.map((benefit, index) => (
                        <li key={index} className="font-semibold">
                            {benefit}
                        </li>
                    ))}
                </ul>
                <br />
                <br />
                <p>
                    <b>
                        {premiumDetails}
                    </b>
                </p>
                <b>Note:</b>
                <p>{note}</p>
                <p>{subscribeText}</p>
            </div>
            <div className="flex flex-col">
                <PremiumSubscribeForm />
            </div>
        </div>
    );
};

export default PremiumSubscribe;
