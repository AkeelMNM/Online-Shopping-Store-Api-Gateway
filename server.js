import express from 'express';
import cors from "cors";
import * as dotenv from 'dotenv';
import ROUTES from "./routes.js";
import setupLogging from "./logging.js";
import setupRateLimit from "./rateLimit.js";
import setupCreditCheck from "./creditCheck.js";
import setupProxies from "./proxy.js";
dotenv.config();

const app = express()
const port = process.env.PORT || 4000;

app.use(cors());
setupLogging(app);
setupRateLimit(app, ROUTES);
setupCreditCheck(app, ROUTES);
setupProxies(app, ROUTES);

app.listen(port, () => {
    console.log(`Fashion store api gatWay listening at http://localhost:${port}`)
})
