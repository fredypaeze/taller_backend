//
const express = require('express');
const router = express.Router();

// Definimos ruta del controlador
const clienteController = require('../controllers/clienteController');
const productoController = require('../controllers/productoController');
const sucursalController = require('../controllers/sucursalController');

// Estas son las rutas de nuestro CRUD

router.post('/clientes', clienteController.agregarClientes);
router.get('/clientes', clienteController.buscarClientes);
router.get('/clientes/:id', clienteController.buscarCliente);



router.post('/productos', productoController.agregarProductos);
router.get('/productos', productoController.buscarProductos);
router.get('/productos/:id', productoController.buscarProducto);


router.post('/sucursales', sucursalController.agregarSucursal);
router.get('/sucursales', sucursalController.buscarSucursal);
router.get('/sucursales/:id', sucursalController.buscarUnaSucursal);

module.exports = router;