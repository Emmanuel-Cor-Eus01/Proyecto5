const {Schema, model} = require('mongoose');

const productosSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es requerido']
    },
    precio: {
        type: Number,
        required: [true, 'El precio del producto es requerido']
    },
    categoria: {
        type: String
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String
    },
    stock: {
        type: Number,
        required: [true, 'El Stock del producto es requerido']
    }
}, {versionKey:false});

module.exports = model('Productos', productosSchema);