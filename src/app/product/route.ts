import * as handler from "./handler";
import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import responseScheme from "../../schema/responseSchema";

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

const prodcutRoute = (app: OpenAPIHono) => {
  app.openapi(all, handler.all);
  return app
};

export { prodcutRoute };
