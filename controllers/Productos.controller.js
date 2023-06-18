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

const prodPut = async (req = request, res = response)=>{
    try {
        const { id } = req.params;
        const body = req.body;
        const productToUpdate = await Producto.findByIdAndUpdate(id, body);
    res.status(200).json({
        msg: "El producto se actualizo Correctamente",
        detalle: productToUpdate
    });
    } catch (error) {
        res.status(400).json({
            msg: "No se pudo actualizar el producto",
            detalle: error.message
        });
    }
}

const prodDelete = async (req = request, res = response)=>{
    try {
        const { id } = req.params;
        await Producto.findByIdAndDelete(id);
    res.status(200).json({
        msg: "El producto se elimino Correctamente",
        detalle: null
    });
    } catch (error) {
        res.status(400).json({
            msg: "No se pudo eliminar el producto",
            detalle: error.message
        });
    }
}

const prodPremium = async (req = request, res = response)=>{
    res.status(200).json({
        msg: "Felicidades eres un usuario logeado",
        detalle: null
    });
}

module.exports = {
    prodGet,
    prodPost,
    prodPut,
    prodDelete,
    prodPremium
}