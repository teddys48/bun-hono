import { env } from "bun";
import { app } from "./src/index";
const { PORT } = env;
import { handle } from "hono/vercel";
const handler = handle(app);
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
export default { port: PORT, fetch: app.fetch };
export const GET = handler;
console.log("app start with port " + PORT);
