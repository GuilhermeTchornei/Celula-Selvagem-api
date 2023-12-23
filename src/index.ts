import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.send("healthy!");
});

const port = 5000;

app.listen(port, () => console.log("server funcionando na porta " + port));