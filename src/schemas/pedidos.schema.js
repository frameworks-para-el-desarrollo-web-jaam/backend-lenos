import { z } from "zod";

export const createPedidoSchema = z.object({
  nombre: z.string({
    required_error: "Title is required",
  })
});