const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config({ path: "./.env" });
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("API is running..."));

app.use("/api/projects", require("./routes/projects"));
app.use("/api/Skills", require("./routes/Skills"));
app.use("/api/contactmessages", require("./routes/Contactmessages"));
app.use("/api/education", require("./routes/Education"));
app.use("/api/certificates", require("./routes/Certificate"));
app.use("/api/Sitecontent", require("./routes/Sitecontent"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/services", require("./routes/Service"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
