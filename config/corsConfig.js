import cors from "cors";
const corsConfigure = () => {
  return cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        "http://localhost:3000", //local use
        "https://production.com", // production domai
      ];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true); // giving the permition so that request can be allowed
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "Access-Version"],
    exposedHeaders: ["Content-Range", "X-Content-Range"],
    credentials: true, // enable set cookie
    preflightContinue: false, // to stop the preflight request
    maxAge: 600, // cache the preflight response for 600 seconds
    optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
};
export default corsConfigure;
