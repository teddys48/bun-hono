import { z } from "zod";

const product = z
  .object({
    name: z
      .string({
        required_error: "name is required",
        invalid_type_error: "name expect string",
      })
      .min(1),
    quantity: z.number({
      required_error: "quantity is required",
      invalid_type_error: "quantity expect number",
    }),
    buy_price: z.number({
      required_error: "buy_price is required",
      invalid_type_error: "buy_price expect number",
    }),
    sell_price: z.number({
      required_error: "sell_price is required",
      invalid_type_error: "sell_price expect number",
    }),
    bundle_price: z
      .number({
        invalid_type_error: "bundle_price expect number",
      })
      .nullable(),
    image: z.string({
      required_error: "image is required",
      invalid_type_error: "image expect string",
    }),
  })
  .openapi("product");

export default product;
