import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

async function sendSubscriptionData(name, email, selectedplan) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/subscribes`,
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        data: {
          name,
          email,
          type: selectedplan,
          active: "true",
        },
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to send subscription data");
  }

  return response.json();
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, plan, paymentMethodId } = req.body;
    try {
      // Determine the price ID based on the selected plan
      let priceId;
      let selectedplan;
      if (plan === "monthly") {
        priceId = "price_1PM47N08lNl0f39rx0Wgmsqs"; // Monthly price ID which is 5$
        selectedplan = "premium-monthly";
      } else if (plan === "annual") {
        priceId = "price_1PM5Nj08lNl0f39ryjyAFiFW"; // Annual price ID
        selectedplan = "premium-yearly";
      } else {
        throw new Error("Invalid plan selected");
      }

      // Create customer
      const customer = await stripe.customers.create({
        email,
      });

      // Attach the payment method to the customer
      await stripe.paymentMethods.attach(paymentMethodId, {
        customer: customer.id,
      });

      // Set the default payment method on the customer
      await stripe.customers.update(customer.id, {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });

      // Create subscription
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        expand: ["latest_invoice.payment_intent"],
      });

      console.log("subscription");
      // Send subscription data to another endpoint
      const subscriptionData = await sendSubscriptionData(
        name,
        email,
        selectedplan,
      );
      console.log("subscriptionData");
      res.status(200).json({ subscription, subscriptionData });
    } catch (error) {
      res.status(400).json({ error: { message: error.message } });
      console.log(error);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
