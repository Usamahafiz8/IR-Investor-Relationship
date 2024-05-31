import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
};

async function checkUserExists(email) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/subscribes?filters[email][$eq]=${email}`,
      {
        method: "GET",
        headers: headers,
      },
    );
  
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to check user existence");
    }
  
    const data = await response.json();
    if (data.data.length > 0) {
      // If user exists, return the user ID
      return data.data[0].id;
    } else {
      // If user does not exist, return null
      return null;
    }
  }
  
  async function UpdateCustomerInformation({ userId, cancel_at_period_end }) {
    const active = !cancel_at_period_end;
  
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}/subscribes/${userId}`,
      {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
          data: {
            active: active.toString(), // Convert active to string
          },
        }),
      },
    );
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
  
    return response.json();
  }
  
  export default async function handler(req, res) {
    if (req.method === "POST") {
      const { customerId } = req.body;
  
      if (!customerId) {
        return res.status(400).json({ error: "Customer ID is required" });
      }
  
      try {
        // Retrieve the customer details from Stripe
        const customer = await stripe.customers.retrieve(customerId);
  
        // Retrieve the customer's subscriptions
        const subscriptions = await stripe.subscriptions.list({
          customer: customerId,
          status: "all", // Retrieve all subscriptions regardless of status
        });
  
        const subscriptionDetails = subscriptions.data.map((subscription) => ({
          id: subscription.id,
          status: subscription.status,
          current_period_start: subscription.current_period_start,
          current_period_end: subscription.current_period_end,
          cancel_at_period_end: subscription.cancel_at_period_end,
          canceled_at: subscription.canceled_at,
          items: subscription.items.data.map((item) => ({
            id: item.id,
            price: item.price,
            quantity: item.quantity,
          })),
        }));
  
        // Check if the user exists before updating the information
        const userId = await checkUserExists(customer.email);
        if (userId) {
          // Update customer information based on subscription status
          await UpdateCustomerInformation({
            userId: userId,
            cancel_at_period_end: subscriptionDetails.some(
              (subscription) => subscription.cancel_at_period_end,
            ),
          });
        }
  
        res.status(200).json({
          customer,
          subscriptions: subscriptionDetails,
        });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  }
  

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { customerId } = req.body;

//     if (!customerId) {
//       return res.status(400).json({ error: "Customer ID is required" });
//     }

//     try {
//       // Retrieve the customer details from Stripe
//       const customer = await stripe.customers.retrieve(customerId);

//       // Retrieve the customer's subscriptions
//       const subscriptions = await stripe.subscriptions.list({
//         customer: customerId,
//         status: "all", // Retrieve all subscriptions regardless of status
//       });

//       const subscriptionDetails = subscriptions.data.map((subscription) => ({
//         id: subscription.id,
//         status: subscription.status,
//         current_period_start: subscription.current_period_start,
//         current_period_end: subscription.current_period_end,
//         cancel_at_period_end: subscription.cancel_at_period_end,
//         canceled_at: subscription.canceled_at,
//         items: subscription.items.data.map((item) => ({
//           id: item.id,
//           price: item.price,
//           quantity: item.quantity,
//         })),
//       }));

//       // Check if the user exists before updating the information
//       const userExists = await checkUserExists(customer.email);
//       if (userExists) {
//         // Update customer information based on subscription status
//         await UpdateCustomerInformation({
//           email: customer.email,
//           cancel_at_period_end: subscriptionDetails.some(
//             (subscription) => subscription.cancel_at_period_end,
//           ),
//         });
//       }

//       res.status(200).json({
//         customer,
//         subscriptions: subscriptionDetails,
//       });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }
