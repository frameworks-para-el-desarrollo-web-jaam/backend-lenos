import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

import authRoutes from "./routes/auth.routes.js";
import pedidosRoutes from "./routes/pedidos.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import comentariosRoutes from "./routes/comentarios.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-scripts.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  }),
);
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: "deny" }));
app.use(
  helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
  }),
);
app.use(helmet.hidePoweredBy());

app.use("/uploads", express.static("uploads"));

app.use("/api",comentariosRoutes);
app.use("/api", pedidosRoutes);
app.use("/api", authRoutes);
app.use("/api", productoRoutes);

export default app;
