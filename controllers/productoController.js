const Producto = require('../models/Producto');

/**
 * Función para buscar los Productos
 */
exports.buscarProductos = async(req, res) => {

    try {
        let producto = await Producto.find();
        res.json(producto)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar los productos')  
    }
}


/**
 * Función: AGREGAR PRODUCTOS
 */

exports.agregarProductos = async(req, res) => {
    
    try {
        let producto;
        producto = new Producto(req.body)
        await producto.save();
        res.send(producto);

    } catch (error) {
      console.log(error)
      res.status(500).send('Hubo un error al agregar el producto')  
    }
}

// Esta fucnión es para buscar un solo cliente
exports.buscarProducto = async (req, res) =>{
    try{
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg:"Producto no encontrado con ese ID"})
        }
        res.send(producto);

    } catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al buscar un producto')
    }
}