import React from "react";

const data = [
  {
    heading: "Our Mission",
    description: "IR coverage specifically focuses on small and micro-cap companies that are under-followed or undervalued by mainstream financial institutions."
  },
  {
    heading: "Our Process",
    description: "The IR analyst team has an average of 20 years' experience in the investment field. We conduct thorough due diligence to maintain the highest quality small-cap universe."
  },
  {
    heading: "Our Valuations",
    description: "IR coverage specifically focuses on small and micro-cap companies that are under-followed or undervalued by mainstream financial institutions."
  }
];

const AboutSection = () => {
  return (
    <>
      <section className="pt-36 pb-12 bg-gradient-to-b from-black/20 to-white/50 text-white">
        <div className="container mx-auto">
          <div className="-mt-48">
            <div className="grid gap-8 md:grid-cols-3">
              {data.map((item, index) => (
                <div key={index} className="text-center p-6 bg-white/10  shadow-lg bg-white">
                  <div className="text-xl text-black font-semibold mb-4">
                    {item.heading}
                  </div>
                  <h6 className="text-lg">
                    {item.description}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;