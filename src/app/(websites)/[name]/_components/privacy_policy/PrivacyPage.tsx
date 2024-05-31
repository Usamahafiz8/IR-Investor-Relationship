import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="flex w-full justify-center bg-white py-16 max-xl:w-3/4 max-lg:w-3/4 lg:w-3/4 xl:w-3/4 xl:pe-1 xxl:px-8">
      <div className="px-4">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="font-semibold text-xl">What Do We Do With The Information You Provide?</h2>
            <p>We may ask you to give us contact and demographic information when you register. We use this information to send our Site users, like you, information about the Site or Services. We also use this information to contact you both online and offline when needed.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl">What Do We Do With Your IP Address And Cookies?</h2>
            <p>We use your IP address to help diagnose problems with our server and to administer our website. Your IP address is used to gather broad demographic information and is stored as a partial identifier. We use cookies, when applicable, to deliver content specific to your interests and when applicable to save your password so you do not have to re-enter it each time you visit our site. You may set your browser to refuse cookies. If you make that choice, please understand that you may not be eligible for any specials and/or promotions we may offer our Site users.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl">Is Your Personal Information Shared?</h2>
            <p>No.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl">Privacy Policy Changes</h2>
            <p>We may amend this privacy policy from time to time.</p>
          </section>

          <section>
            <h2 className="font-semibold text-xl">Contacting the Web Site</h2>
            <p>If you have any questions about this privacy statement, the practices of this site, or use of our trademarks and copyrighted material, or for any other concerns please feel free to contact us.</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
