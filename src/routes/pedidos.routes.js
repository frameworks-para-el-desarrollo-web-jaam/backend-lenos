import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";


import {
  createPedido,
  deletePedido,
  getPedido,
  getPedidos,
  updatePedido,
} from "../controllers/pedidos.controller.js";
import { createPedidoSchema } from "../schemas/pedidos.schema.js";
import { validateSchema } from "../middlewares/validator.middleware.js";

const router = Router();

router.get("/pedidos",  authRequire, getPedidos);

router.post("/pedidos", authRequire, validateSchema(createPedidoSchema), createPedido);

router.get("/pedidos/:id", authRequire, getPedido);

router.put("/pedidos/:id", authRequire, updatePedido);

router.delete("/pedidos/:id", authRequire, deletePedido);

export default router;
