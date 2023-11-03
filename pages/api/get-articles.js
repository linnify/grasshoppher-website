import { cors, middleware } from "./utils/middleware";
import { getArticles } from "./utils/articles";

export default async (req, res) => {
  await middleware(req, res, cors);

  const { page, pageSize } = req.body;
  try {
    const response = await getArticles(page, pageSize);
    return res.status(200).send(response);
  } catch (e) {
    return res.status(400).send("Something went wrong, try again");
  }
};
