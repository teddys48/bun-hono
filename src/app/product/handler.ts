import { Context } from "hono";
import * as usecase from "./usecase";

const all = async (c: Context) => {
  const result = await usecase.all(c);
  return c.json(result, 200);
};

const create = async (c: Context) => {
  const result = await usecase.create(c);
  return c.json(result, 200);
};

export { all, create };
