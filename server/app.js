import express from "express";
import {getDashboard} from "./src/service";
const config = require('./config.json');
const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const port = config.app_port;



app.use('/', getDashboard);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
