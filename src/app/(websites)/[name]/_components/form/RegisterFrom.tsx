"use client";


import React, { useState, useEffect } from "react";
import { message, Spin } from "antd";
import * as Yup from "yup";
import UserThree from "@/svg/user-3";
import Email from "@/svg/email";
import Lock from "@/svg/lock";
import EyeCut from "@/svg/eye-cut";
import { useRouter } from "next/navigation";

const registerSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
});

const WebsiteRegisterForm: React.FC = () => {
    const [showPass, setShowPass] = useState<boolean>(false);
    const [showConPass, setShowConPass] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<{
        username: string;
        email: string;
        password: string;
        passwordConfirmation: string;
    }>({
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });
    const [websiteName, setWebsiteName] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        // Get website name from local storage
        const storedWebsiteName = localStorage.getItem("websiteName");
        setWebsiteName(storedWebsiteName);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            await registerSchema.validate(formData, { abortEarly: false });
            const response = await fetch("/api/auth/signup", {
                method: "POST",
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                    websiteName: websiteName
                }),
            });
            const result = await response.json();
            setLoading(false);
            if (result.status === 409) {
                message.error("Email already exists");
            } else if (result.status === 200) {
                message.success("Successfully signed up");
                setFormData({
                    username: "",
                    email: "",
                    password: "",
                    passwordConfirmation: ""
                });
                router.push(`/${websiteName}/signin`);
            } else {
                message.error(result.message || "Error while signing up");
            }
        } catch (error) {
            setLoading(false);
            if (error instanceof Yup.ValidationError) {
                error.inner.forEach((err) => {
                    message.error(err.message);
                });
            } else {
                message.error("An error occurred");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="login__input-wrapper">
                <div className="login__input-item">
                    <div className="login__input">
                        <input
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter your username"
                            id="username"
                            required
                        />
                        <span>
                            <UserThree />
                        </span>
                    </div>
                </div>
                <div className="login__input-item">
                    <div className="login__input">
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Enter your email"
                            id="email"
                            required
                        />
                        <span>
                            <Email />
                        </span>
                    </div>
                </div>
                <div className="login__input-item">
                    <div className="login__input-item-inner p-relative">
                        <div className="login__input">
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                type={showPass ? "text" : "password"}
                                placeholder="Password"
                                id="password"
                                required
                            />
                            <span>
                                <Lock />
                            </span>
                        </div>
                        <span
                            className="login-input-eye"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
                        </span>
                    </div>
                </div>
                <div className="login__input-item">
                    <div className="login__input-item-inner p-relative">
                        <div className="login__input">
                            <input
                                name="passwordConfirmation"
                                value={formData.passwordConfirmation}
                                onChange={handleInputChange}
                                type={showConPass ? "text" : "password"}
                                placeholder="Confirm Password"
                                id="passwordConfirmation"
                                required
                            />
                            <span>
                                <Lock />
                            </span>
                        </div>
                        <span
                            className="login-input-eye"
                            onClick={() => setShowConPass(!showConPass)}
                        >
                            {showConPass ? <i className="fa-regular fa-eye"></i> : <EyeCut />}
                        </span>
                    </div>
                </div>
            </div>
            <div className="login__btn text-center">
                <Spin spinning={loading}>
                    <button type="submit" className="bd-btn">
                        Sign Up
                    </button>
                </Spin>
            </div>
        </form>
    );
};

export default WebsiteRegisterForm;
