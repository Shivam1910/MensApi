const express = require("express");
const connectdB = require("../src/db/conn");

const mensApiRouter = require("./routers/mensApi");
const app = express();
app.use(express.json());
app.use(mensApiRouter);

connectdB();
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`connection is live. ${port}`);
})
