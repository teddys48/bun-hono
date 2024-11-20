import { logger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { buildResponse } from "./helper/response";
import { prodcutRoute } from "./app/product/route";
import responseScheme from "./schema/response.schema";
import { apiReference } from "@scalar/hono-api-reference";

const app = new OpenAPIHono();
// const app = new Hono();
app.doc("/doc", {
  openapi: "3.0.3",
  info: {
    version: "0.0.0",
    title: "My API",
  },
});

app.get(
  "/swagger",
  apiReference({
    theme: "saturn",
    spec: {
      url: "/doc",
    },
    cdn: "https://cdn.jsdelivr.net/npm/@scalar/api-reference@latest/dist/browser/standalone.min.js",
  })
);

app.use(logger());

app.get("/", (c) => {
  return c.text("Welcome!");
});

const all = createRoute({
  method: "get",
  path: "/test",
  tags: ["Test"],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: responseScheme,
        },
      },
      description: "success",
    },
  },
});

app.openapi(all, (c) => {
  return c.json(buildResponse(0, "success", null), 200);
});
app.get("/api", (c) => {
  return c.json("Welcome vercel");
});
prodcutRoute(app);

app.get("/ui", swaggerUI({ url: "/doc" }));

export { app };
