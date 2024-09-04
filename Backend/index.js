import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors({
    origin:["http://localhost:5173","https://bookstore-my-first-web.vercel.app"],
    methods:['POST','GET','HEAD','PUT','DELETE'],
    credentials: true
}));
app.use(express.json());


const PORT = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

// console.log("Mongodb uri",URI)

// connect to mongoDB


// Connect to MongoDB
// const connectDB = async () => {
//     try {
//         // Connect to MongoDB
//          mongoose.connect(URI)
//         // Log successful connection
//           console.log("Connected to mongoDB");
//     } catch (error) {
//     console.log("Error: ", error);
// }
// }

const connectDatabase = () => {
    mongoose
      .connect(URI)
      .then((data) => {
        console.log("Database connected");
      });
  };
  
  connectDatabase();
// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


