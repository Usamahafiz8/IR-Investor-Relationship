import ContactMain from '@/components/contact/ContactMain';
import WrapperCommon from '@/layout/WrapperCommon';
import React from 'react';
const ContactPage = () => {
    return (
        <>
            <WrapperCommon>
                <main>
                    <ContactMain/>
                </main>
            </WrapperCommon>
        </>
    );
};

export default ContactPage;