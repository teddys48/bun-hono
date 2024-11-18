import { z } from "zod";

const responseScheme = z
  .object({
    code: z.number(),
    message: z.string(),
    data: z.any(),
  })
  .openapi("response");

export default responseScheme;
