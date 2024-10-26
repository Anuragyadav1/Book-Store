import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", "https://bookstore-my-first-application.vercel.app"],
    methods: ['POST', 'GET', 'HEAD', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

const connectDatabase = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Exit the process if the database connection fails
    }
};

// Connect to MongoDB
connectDatabase();

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", () => {
    console.log("SIGTERM signal received. Closing HTTP server.");
    server.close(() => {
        console.log("HTTP server closed.");
        mongoose.connection.close(false, () => {
            console.log("MongoDB connection closed.");
            process.exit(0);
        });
    });
});
