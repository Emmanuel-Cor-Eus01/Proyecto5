const { Schema, model } = require("mongoose");

const usersSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del usuario es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El email del usuario es obligatorio']
    },
    dob: {
        type: Date,
        required: [true, 'La fecha de nacimiento del usuario es obligatoria']
    },
    password: {
        type: String,
        required: [true, 'La contraseña del usuario es obligatorio']
    }
}, {versionKey: false} );

module.exports = model ('Usuarios', usersSchema);