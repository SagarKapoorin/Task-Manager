import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import  tasksRoutes from "./routes/Tasks.js";
import { register } from "./controller/auth.js";
import { createTasks } from "./controller/tasks.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Tasks from "./models/Tasks.js";
import { fakeData } from "./data/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.post("/auth/register", register);
app.post("/tasks", verifyToken, createTasks);

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/tasks", tasksRoutes);
// console.log(process.env.PORT+" "+process.env.MONGO_URL);
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // fakeData();
  })
  .catch((error) => console.log(`${error} did not connect`));