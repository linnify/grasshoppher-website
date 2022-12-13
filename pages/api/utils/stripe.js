import Stripe from "stripe";

let stripePromise = null;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = new Stripe(`${process.env.STRIPE_API_KEY}`);
  }
  return stripePromise;
};

export const isActiveSubscription = async (email) => {
  if (`${process.env.EXCLUDED_MAILS}` === email) {
    return {
      active: true,
      virtual: false,
    };
  }
  const stripe = await getStripe();
  const customers = await stripe.customers.search({
    query: `email:'${email}'`,
    expand: ["data.subscriptions"],
  });
  if (customers.data?.length) {
    const subscription = customers.data[0].subscriptions?.data?.find(
      (subscription) =>
        subscription.status === "active" || subscription.status === "trialing"
    );
    if (subscription) {
      const activeSubscription = await stripe.subscriptions.retrieve(
        subscription.id,
        {
          expand: ["plan.product"],
        }
      );
      if (activeSubscription) {
        return {
          active: true,
          virtual: activeSubscription.plan.product.name
            .toLowerCase()
            .includes("virtual"),
        };
      }
    }
  }

  return { active: false };
};
