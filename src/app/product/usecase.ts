import { Context } from "hono";
import { buildResponse } from "../../helper/response";
import * as repository from "./repository";
import { randomNumber } from "../../helper/random-number";

const all = async (c: Context) => {
  try {
    const result = await repository.all();
    return buildResponse(0, "success", result);
  } catch (error) {
    console.log(error);
    return buildResponse(0, "server error", null);
  }
};

const find = async (c: Context) => {
  try {
    let { id }: any = c.req.param;
    const result = await repository.find(Number(id));
    return buildResponse(0, "success", result);
  } catch (error) {
    console.log(error);
    return buildResponse(0, "server error", null);
  }
};

const create = async (c: Context) => {
  try {
    let { name, quantity, buy_price, sell_price, bundle_price }: any =
      c.req.json();

    const code = "PRODUCT" + randomNumber();

    const dataInsert = {
      name: name,
      code: code,
      quantity: quantity,
      buy_price: buy_price,
      sell_price: sell_price,
      bundle_price: bundle_price,
    };

    await repository.create(dataInsert);

    return buildResponse(0, "success", null);
  } catch (error) {
    console.log(error);
    return buildResponse(0, "server error", null);
  }
};

const update = async (c: Context) => {
  try {
    let { name, quantity, buy_price, sell_price }: any = c.req.json();
    let { id }: any = c.req.query();

    const dataUpdate = {
      name: name,
      quantity: quantity,
      buy_price: buy_price,
      sell_price: sell_price,
    };

    await repository.update(Number(id), dataUpdate);
    return buildResponse(0, "success", null);
  } catch (error) {
    console.log(error);
    return buildResponse(0, "server error", null);
  }
};

const del = async (c: Context) => {
  try {
    let { id }: any = c.req.query();

    await repository.del(Number(id));

    return buildResponse(0, "success", null);
  } catch (error) {
    console.log(error);
    return buildResponse(0, "server error", null);
  }
};

export { all, find, create, update, del };
