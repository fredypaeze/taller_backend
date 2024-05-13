const Sucursal = require('../models/Sucursal');

/**
 * Función para buscar las sucursales
 */
exports.buscarSucursal = async(req, res) => {

    try {
        let sucursal = await Sucursal.find();
        res.json(sucursal)

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar las Sucursales')  
    }
}


/**
 * Función: AGREGAR SUCURSAL
 */

exports.agregarSucursal = async(req, res) => {
    
    try {
        let sucursal;
        sucursal = new Sucursal(req.body)
        await sucursal.save();
        res.send(sucursal);

    } catch (error) {
      console.log(error)
      res.status(500).send('Hubo un error al agregar una sucursal')  
    }
}

// Esta fucnión es para buscar una sola sucursal
exports.buscarUnaSucursal = async (req, res) =>{
    try{
        let sucursal = await Sucursal.findById(req.params.id);
        if(!sucursal){
            res.status(404).json({msg:"Sucursal no encontrada con ese ID"})
        }
        res.send(sucursal);

    } catch (error){
        console.log(error)
        res.status(500).send('Hubo un error al buscar una sucursal')
    }
}