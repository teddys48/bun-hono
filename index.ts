import { env } from "bun";
import { app } from "./src/index";
const { PORT } = env;

export default { port: PORT, fetch: app.fetch };
console.log("app start with port " + PORT);
