const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const uploadRoutes = require("./routes/uploadRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

dotenv.config();   // loads .env variables

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", uploadRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req,res)=>{
    res.send("Sales Insight Automator API Running");
});

const PORT = process.env.PORT || 8000;

// Debug logs (good for testing)
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("GROQ_API_KEY:", process.env.GROQ_API_KEY ? "Loaded ✅" : "Missing ❌");

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
});