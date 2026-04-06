import express from 'express';
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from './routes/auth.routes.js'
import pedidosRoutes from "./routes/pedidos.routes.js"
import productoRoutes from "./routes/producto.routes.js"


const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));



app.use("/api", pedidosRoutes);
app.use("/api", authRoutes);
app.use("/api", productoRoutes);


export default app;
