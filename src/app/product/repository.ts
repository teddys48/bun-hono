import { Context } from "hono";
import knex from "../../config/db";

const all = async () => {
  return await knex.table("product");
};

const find = async (id: number) => {
  return await knex.table("product").where("id", id).first();
};

const create = async (data: any) => {
  return await knex.table("product").insert(data);
};

const update = async (id: number, data: any) => {
  return await knex.table("product").where("id", id).update(data);
};

const del = async (id: number) => {
  return await knex.table("product").where("id", id).delete();
};

export { all, find, create, update, del };
