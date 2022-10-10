import Cors from "cors";

export const cors = Cors({
  methods: ["POST", "OPTIONS"],
});

export const middleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};
