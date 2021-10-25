import { createServer, Model } from "miragejs";

if(process.env.NODE_ENV === 'development') {
    createServer({
        models: {
            example: Model
        },

        seeds(server) {
            server.create("example", { name: "Example 1"})
            server.create("example", { name: "Example 2"})
            server.create("example", { name: "Example 3"})
        },

        routes() {
            this.namespace = 'api';

            this.get('/example', (schema) => {
                return schema.examples.all();
            })
        }
    })
}