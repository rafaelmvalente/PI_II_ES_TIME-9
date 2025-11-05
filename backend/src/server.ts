import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import alunosRouter from "./routes/alunos.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/alunos", alunosRouter);

app.get("/", (req, res) => {
  res.send("Servidor NotaDez rodando! 🚀");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));