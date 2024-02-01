import express from "express";

const app = express();

const base = "/";
app.use(base, express.static("dist/"));

app.listen(3000);