import Koa from "koa";
import RedisStore from "koa-redis";
import bodyParser from "koa-bodyparser";
import session from "koa-session";
import cors from "@koa/cors";
import pino from "pino";

import passport from "./config/passport";
import authRoutes from "./routes/auth";

const logger = pino();
const store = new RedisStore();
const app = new Koa();
const PORT = process.env.PORT || 1337;

app.use(cors());

// sessions
app.keys = ["super-secret-key"];
app.use(session({ store }, app));

// body parser
app.use(bodyParser());

// authentication
app.use(passport.initialize());
// app.use(passport.session());

// routes
app.use(authRoutes.routes());

// server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  logger.info(`Server listening on http://127.0.0.1:${PORT}`);
});
