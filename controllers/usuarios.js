const { response } = require('express')

const usuariosGet = (req, res = response) => {
    const { q, nombre = 'No name', apikey, page = 1 } = req.query;
    
    res.status(201).json({
        'msg': 'get API',
        q,
        nombre,
        apikey,
        page
    })
};
const usuariosPost = (req, res = response) => {
    const {nombre,edad} = req.body;

    res.json({
        msg: 'post API',
        nombre,
        edad,
    })
};
const usuariosPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
        'msg': 'put API',
        id
    })
};
const usuariosDelete = (req, res = response) => {
    res.json({
        'msg': 'delete API'
    })
};

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}