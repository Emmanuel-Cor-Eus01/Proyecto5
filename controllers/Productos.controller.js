const {response, request} = require('express');
const Producto = require('../models/Producto.model');

const prodGet = async (req = request, res = response)=>{
    try {
        const prodList = await Producto.find();
        res.status(200).json({
            msg: "Listado de productos",
            detalle: prodList
        });
    } catch (error) {
        res.status(400).json({
            msg: "No se pudo listar los productos",
            detalle: error.message
        });
    }
}

const prodPost = async (req = request, res = response)=>{
    try {
        const body = req.body;
        let producto = new  Producto (body);
        await producto.save();

        res.status(200).json({
            msg: "El producto se agrego correctamente",
            detalle: producto
        });
    } catch (error) {
        res.status(400).json({
            msg: "No se pudo agregar el producto",
            detalle: error.message
        });
    }
}

module.exports = {
    prodGet,
    prodPost
}