import * as handler from "./handler";
import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import responseScheme from "../../schema/response.schema";
import product from "../../schema/product.schema";

const all = createRoute({
  method: "get",
  path: "/product",
  tags: ["Product"],
  description: "get all product",
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

const insert = createRoute({
  method: "post",
  path: "/product/create",
  tags: ["Product"],
  description: "get all product",
  request: {
    body: {
      content: { "application/json": { schema: product } },
    },
  },
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

const prodcutRoute = (app: OpenAPIHono) => {
  app.openapi(all, handler.all);
  app.openapi(insert, handler.create);
  return app;
};

export { prodcutRoute };
