import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    telefono: { 
        type: String, 
        required: true, 
        length: 10 
    },
    direccion: {
        type: String, 
        required: true 
    },
    fecha_solicitud: {
        type: Date,
        default : Date.now,
        required: false 
    },
    fecha_envio: {
        type: Date,
        default : Date.now,
        required: false 
    },
    total: { 
        type: Number,
        default: 0.0 
    },
    pagado: [String],

    comentario: { 
        type: String 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

export default mongoose.model('Pedido', pedidoSchema)