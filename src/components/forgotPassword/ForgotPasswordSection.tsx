import Link from 'next/link';
import React from 'react';
import bgImg from "../../../public/assets/img/bg/faq-bg.jpg";
import ForgotForm from '@/form/forgot-form';

const ForgotPasswordSection = () => {
    return (
        <section className="login__area pt-120 pb-120 p-relative">
            <div
                className="bd-faq__bg"
                style={{ backgroundImage: `url(${bgImg.src})` }}
            ></div>
            <div className="container">
                <div className="login__inner p-relative z-index-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="login__wrapper">
                                <div className="login__top mb-30 text-center">
                                    <h3 className="login__title">Forgot Password?</h3>
                                    <p>Enter your email address to request password reset.</p>
                                </div>
                                <div className="login__form">
                                    <ForgotForm />
                                    <div className="login__register-now">
                                        <p>
                                            Remember your password?{" "}
                                            <Link href="/login">Sign In</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPasswordSection;