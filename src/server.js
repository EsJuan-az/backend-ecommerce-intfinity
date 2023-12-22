//Constants and modules
const express = require('express');
const port = 5051;
//Extern code
const { embedErrorMiddlewares } = require('./middlewares');
const embedRoutes = require('./routes')


class Server{
    //Singleton pattern
    static #instance;
    static get instance(){
        Server.#instance = Server.#instance || new Server();
        return Server.#instance;
    }
    constructor(){
        this.app = express();
        this.preset();
    }
    preset(){
        //Body parsing
        this.app.use( express.urlencoded({ extended: true }) );
        this.app.use( express.json() );
        //embedRoutes: insert every model router into the main server.
        embedRoutes( this.app );
        //embedErrorMiddlewares: insert every error middleware into the main router.
        embedErrorMiddlewares( this.app );
    }
    listen(){
        //Listens server
        this.app.listen(port, () => {
            console.log(`Intfinity listening on port ${port}`);
        });
    }
}
module.exports = Server.instance;