/* jshint esversion: 6 */

const cluster = require('cluster');
const express = require('express');
const userRouter = require('./routers/userRouter');

const NO_CPU = 3;

if (cluster.isMaster) {

    for (let i = 0; i < NO_CPU; i++) {
        console.log(`Master ${process.pid} is running`);
        cluster.fork();
    }

    cluster.on('exit', (worker) => {
        console.log(`worker ${worker.process.pid} died`);
    });
} else {
    const PORT = 8000;
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });

    app.use('/user', userRouter);

}
