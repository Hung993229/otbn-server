const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const app = express();
dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("connected mongoose");
});

const port = 3000;
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/post", postRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
