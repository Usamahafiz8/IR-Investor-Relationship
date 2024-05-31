import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { email } = req.body;

    try {
        const customers = await stripe.customers.list({ email });

        if (customers.data.length === 0) {
            return res.status(404).json({ error: 'Customer not found' });
        }

        const customer = customers.data[0];
        return res.status(200).json({ customerId: customer.id });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
