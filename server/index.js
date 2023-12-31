const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose
  .connect("mongodb+srv://omi:1234@omi.vqrn8w9.mongodb.net/courses", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "courses",
  })
  .then((res) => {
    console.log("Db connection established");
  });

app.listen(3000, () => console.log("Server running on port 3000"));
