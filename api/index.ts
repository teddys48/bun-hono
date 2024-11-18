import { app } from "../src/index";

import { handle } from "hono/vercel";

const handler = handle(app);
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
export const GET = handler;
