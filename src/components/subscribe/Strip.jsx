"use client";
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PremiumSubscribeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "monthly", // Set default plan to monthly
  });
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    setFormData({ ...formData, plan: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet, handle this error case gracefully
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: {
          name: formData.name,
          email: formData.email,
        },
      });

      if (error) {
        showMessageWithTimeout(error.message, false);
        setLoading(false);
      } else {
        const response = await fetch("/api/strip/create-subscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            plan: formData.plan,
            paymentMethodId: paymentMethod.id,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          showMessageWithTimeout("Subscription successful!", true);
          setFormData({ name: "", email: "", plan: "monthly" }); // Reset plan to monthly
          elements.getElement(CardElement).clear(); // Clear the card details
        } else {
          showMessageWithTimeout(data.error.message, false);
        }
        setLoading(false);
      }
    } catch (error) {
      showMessageWithTimeout("An error occurred. Please try again.", false);
      setLoading(false);
    }
  };

  const showMessageWithTimeout = (message, success) => {
    setShowMessage(true);
    setMessage(message);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-2xl font-bold">
        Subscribe To Investor Radar Premium
      </div>
      <div className="mb-4 text-lg ">Stripe Payment Method will be used</div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-md flex-col gap-4"
      >
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded border p-2"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-1 block w-full rounded border p-2"
            placeholder="Your email"
            required
          />
        </label>
        <div className="block">
          <span className="text-gray-700">Plan</span>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="plan"
                value="monthly"
                checked={formData.plan === "monthly"}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Monthly ($5 per Month)</span>
            </label>
            <label className="ml-6 inline-flex items-center">
              <input
                type="radio"
                name="plan"
                value="annual"
                checked={formData.plan === "annual"}
                onChange={handleChange}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2">Annual ($50 Annually)</span>
            </label>
          </div>
        </div>
        <label className="block">
          <span className="text-gray-700">Card Details</span>
          <div className="mt-1 block w-full rounded border p-2">
            <CardElement />
          </div>
        </label>
        <button
          type="submit"
          className={`bg-[#eec78c] px-4 py-2 text-white hover:bg-black ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Processing..." : "Subscribe"}
        </button>
      </form>
      {showMessage && (
        <p
          className={`mt-4 text-center ${message.includes("successful") ? "text-green-500" : "text-red-500"}`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default PremiumSubscribeForm;
