const express = require('express');
const app = express();

require("./conn/conn");

app.get('/', (req, res, next) => {
    res.send("Hello");
});
app.listen(1000, () => {
    console.log('Server is listening on port 1000');
});
