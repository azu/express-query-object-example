import express from "express";

const app = express();
const port = 3000;

// → http://localhost:3000/check?user[$ne]=0&password[$ne]=0
app.get("/check", (req) => {
    console.log(req.params); // { 'user': { '$ne': '0' }, password: { '$ne': '0' } }
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
