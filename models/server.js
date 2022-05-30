const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = new express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        this.middlewares();
        this.router();
    }
    middlewares() {
        // cors
        this.app.use( cors() );

        // letura y parseo
        this.app.use( express.json() );

        // directorio publico
        this.app.use( express.static('public') );
    }
    router() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port)
        })
    }
}

module.exports = Server;
