import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes.js"; 

 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());


app.use("/api", todoRoutes);


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() =>console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


// Define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to the Backend Server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
     