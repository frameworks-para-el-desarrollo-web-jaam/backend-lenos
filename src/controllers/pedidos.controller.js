import Pedido from "../models/pedido.model.js";

export const getPedidos = async (req, res) => {
 const pedido = await Pedido.find({
      user: req.user.id
    }).populate('user')

    res.json(pedido);
};

export const createPedido = async (req, res) => {
  try {
    const { nombre, telefono, direccion, total, pagado, comentario } = req.body;
    
    const newPedido = new Pedido({
      nombre,
      telefono,
      direccion,
      total,
      pagado,
      comentario,
      user: req.user.id
    });
    const savedPedido = await newPedido.save();
    res.json(savedPedido);


    console.log(newPedido)
  
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPedido = async (req, res) => {
  const pedido = await Pedido.findById(req.params.id).populate('user');
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    return res.json(pedido);
};


export const deletePedido = async (req, res) => {
 const pedido = await Pedido.findByIdAndDelete(req.params.id);
    if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
    return res.sendStatus(204);
};

export const updatePedido = async (req, res) => {
  const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
  });
  if (!pedido) return res.status(404).json({ message: "Pedido no encontrado" });
  res.json(pedido);   
};


