import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { customerId, returnUrl } = req.body;

  try {
    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${returnUrl}/subscribe/conformation?customerID=${customerId}`,
    });

    console.log(session);

    return res.status(200).json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
