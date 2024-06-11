import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import connectDB from "./config/database.js";
import userRoute from "./routes/user.routes.js";
import superAdminRoute from "./routes/superAdmin.routes.js"
import adminRoute from "./routes/admin.routes.js";
// import adminRoute from "./routes/adminRoutes.js";
import formRoute from "./routes/form.routes.js";
// import authAdmin from "./middleware/authAdmin.js";
import cors from 'cors'

const app = express();

dotenv.config();

// Import env variables
const PORT = process.env.PORT || 3000;

// Call connectDB function to connect to the database
connectDB();


// Middleware functions
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.use("/protected-route", authAdmin, (req, res) => {
//   res.send("This is a protected route");
// });


// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   console.log("Received token:", token); // Add this line for debugging
//   if (!token) {
//     return res.status(401).json({ message: "The token was not available" });
//   } else {
//     jwt.verify(token, "jwt-secret", (err, decoded) => {
//       if (err) {
//         return res.status(403).json({ message: "Token is wrong" });
//       }
//       req.email = decoded.email; // Store the decoded token in request object
//       next();
//     });
//   }
// };


// Match the router middleware
// app.use("/api", adminRoute);
app.use("/user", userRoute);
app.use("/form", formRoute);
// app.use("/form", verifyUser, formRoute);
app.use("/admin",adminRoute);
app.use("/superAdmin", superAdminRoute);



app.get("/", (req, res) => {
  res.send("Hello from backend Cheers!!");
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});