import React from "react";

import "./home.css"; // Assuming you have your custom styles in home.css



const data = [
    {
        heading: "HTCR: HeartCore Announces Sale of $9.0 Million in Go IPO Client Warrants.",
        date:
            "04/02/2024"
    },
    {
        heading: "SLRX Pursues Important Goal",
        date:
            "04/02/2024"
    },
    {
        heading: "MIRA Making Strides Toward Breakthrough Treatment",
        date: "04/02/2024"
    }
];

const NewsSection = () => {
    return (
        <>
            <section className="bd-about__area pt-150 pb-150" style={{ backgroundImage: " rgba(255, 255, 255, 0.5))", color: "white", textAlign: "center" }}>
                <div className="container">
                    <div style={{
                        marginBottom: "56px", color: "black", fontSize: "2em", fontWeight: "500"
                    }}>
                        Latest News
                    </div>
                    <div className="about-items">
                        {data.map((item, index) => (
                            <div key={index} style={{ color: 'black' }}>
                                <i>
                                    <div className="about-date">{item.date}</div>
                                </i>
                                <div style={{
                                    maxWidth: "350px"
                                }}>

                                    {item.heading}

                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{
                        marginTop: "56px", color: "black", fontSize: "1em", fontWeight: "500"

                    }}>
                        View All News
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewsSection;
