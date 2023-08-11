import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import emailRoutes from "./routes/emailRoute.js";
import cors from "cors"
// import https from "https";
// import fs from "fs";
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));
app.use("/uploads",express.static("./uploads"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/email", emailRoutes);
// app.use(cors({
//   origin: ["https://winnow.biz"],
//   // Other CORS options
// }));

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});


// Start HTTPS server
// const privKeyPath = "/etc/letsencrypt/live/winnow.biz/privkey.pem";
// const fullChainPath = "/etc/letsencrypt/live/winnow.biz/fullchain.pem";

// if (fs.existsSync(privKeyPath) && fs.existsSync(fullChainPath)) {
//   const sslOptions = {
//     key: fs.readFileSync(privKeyPath),
//     cert: fs.readFileSync(fullChainPath),
//   };

//   const httpsServer = https.createServer(sslOptions, app);

//   httpsServer.listen(PORT, () => {
//     console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
//   });
// } else {
//   console.error("SSL certificate files not found.");
// }