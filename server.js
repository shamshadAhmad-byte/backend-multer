import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";
import connectdb from "./db/connectDB.js";
import corsConfig from "./config/corsConfig.js";
import printReq from "./middleware/printReq.js";
import helmet from "helmet";
import adminRoute from "./routes/admin_routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(corsConfig());
app.use(helmet());
app.use(printReq);

// connect db
connectdb();

// endpoints in rountes
app.use("/api/admin", adminRoute);
app.use("/images", express.static("uploads"));

app.get("/", (req, res) => {
  res.end("hello world");
});
const server = createServer(app);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
