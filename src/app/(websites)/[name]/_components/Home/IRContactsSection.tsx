import React from 'react';

const contacts = [
  {
    title: 'HEADQUARTERS',
    details: [
      'LTRY Corporation',
      '25 Hendrix Road',
      'Suite A',
      'West Henrietta, NY 14586',
      'T: 585-359-5900',
      'F: 585-359-4172',
      'ir@LTRY.com'
    ]
  },
  {
    title: 'INVESTOR RELATIONS',
    details: [
      'LTRY Corporation',
      'Ed McGregor, CFA',
      'Director of Investor Relations',
      'T: 585-359-5985',
      'ed_mcgregor@LTRY.com'
    ]
  },
  {
    title: 'TRANSFER AGENT',
    details: [
      'Computershare',
      '462 South 4th Street',
      'Suite 1600',
      'Louisville, KY 40202',
      'T: 800-962-4284 (US and Canada) T: 781-525-3120 (Outside of US/Canada)'
    ]
  }
];

const IRContactsSection = () => {
  return (
    <section className="py-16 px-2 bg-white">
    
        <h2 className="text-3xl font-bold mb-8">IR CONTACTS</h2>
        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 gap-8">
          {contacts.map((contact, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4">{contact.title}</h3>
              <ul className="space-y-1">
                {contact.details.map((detail, i) => (
                  <li key={i} className="text-gray-800 text-sm">
                    {detail.includes('@') ? (
                      <span className="text-blue-500 hover:underline">
                        {detail}
                      </span>
                    ) : (
                      detail
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </section>
  );
};

export default IRContactsSection;
