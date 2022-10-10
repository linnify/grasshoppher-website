import { cors, middleware } from "./utils/middleware";
import { isActiveSubscription } from "./utils/stripe";

export default async (req, res) => {
  await middleware(req, res, cors);

  const { email } = req.body;
  try {
    const response = await isActiveSubscription(email);
    return res.status(200).send(response);
  } catch (e) {
    return res.status(400).send("Something went wrong, try again");
  }
};
