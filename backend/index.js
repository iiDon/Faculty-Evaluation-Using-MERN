// Import express
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require('cookie-parser')

// Import Routes
const users = require("./Routes/usersRoutes");
const faculties = require("./Routes/facultiesRoutes");
const comments = require("./Routes/commentsRoutes");
const evaluations = require("./Routes/evaluationsRoutes");
const evaluationCategories = require("./Routes/evaluationCategoriesRoutes");
const courses = require("./Routes/coursesRoutes");
const majors = require("./Routes/majorsRoutes");
// =========================================================

// MiddleWare
const auth = require('./middlewares/Auth')

// =========================================================

// Import Mongoose
const mongoose = require("mongoose");

// =========================================================

// Import .env
require("dotenv").config();

// Connect to Database
const connect = async () => {
  await mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log("Connected to Mongo");
    })
    .catch((err) => {
      throw err;
    });
};

// =========================================================

//Routes
app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use("/api/user",auth, users);
app.use("/api/faculty",auth, faculties);
app.use("/api/comment", comments);
app.use("/api/evaluation", evaluations);
app.use("/api/evaluationcategory", evaluationCategories);
app.use("/api/course", courses);
app.use("/api/major", majors);

// =========================================================

// Turn on server

// Port
const PORT = process.env.PORT;

// Listen
app.listen(PORT, () => {
  console.log(`Server online on port ${PORT}`);
  connect();
});
