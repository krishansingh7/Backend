import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/user.routes.js";
import cors from 'cors'

const app = express();

dotenv.config();

// Import env variables
const PORT = process.env.PORT || 3000;

// Call connectDB function to connect to the database
connectDB();

// Middleware functions
app.use(express.json());
app.use(cors());

// Match the router middleware
app.use("/user", userRoute);


app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
