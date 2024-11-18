import { Hono } from "hono";
import { logger } from "hono/logger";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { z } from "zod";
import { buildResponse } from "./helper/response";
// import route from "./app/product/route";
import { prodcutRoute } from "./app/product/route";
import responseScheme from "./schema/responseSchema";
import { apiReference } from "@scalar/hono-api-reference";

const app = new OpenAPIHono();
// const app = new Hono();
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.get(
  "/swagger",
  apiReference({
    theme: "solarized",
    spec: {
      url: "/doc",
    },
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

const apiRoute = app;
apiRoute.openapi(all, (c) => {
  return c.json(buildResponse(0, "success", null), 200);
});
app.get("/api", (c) => {
  return c.json("Welcome vercel");
});
prodcutRoute(apiRoute);

app.get("/ui", swaggerUI({ url: "/doc" }));

export { app, apiRoute };
