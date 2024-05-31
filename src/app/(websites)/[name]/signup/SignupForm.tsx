import Link from 'next/link';
import React from 'react';
import WebsiteRegisterForm from '../_components/form/RegisterFrom';

const SignUpForm = () => {
    return (
        <section className="login__area pt-120 pb-120 p-relative">
            <div
                className="bd-faq__bg"
            ></div>
            <div className="container">
                <div className="login__inner p-relative z-index-1">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="login__wrapper">
                                <div className="login__top mb-30 text-center">
                                    <h3 className="login__title">Register Now!</h3>
                                    <p>You can signup here</p>
                                </div>
                                <div className="login__form">
                                    <WebsiteRegisterForm />
                                    <div className="login__register-now">
                                        <p>
                                            Already have an account?{" "}
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

export default SignUpForm;