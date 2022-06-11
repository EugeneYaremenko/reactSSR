import express from 'express';
import fs from "fs";
import path from 'path';


import ReactDOMServer from 'react-dom/server';

import App from "../components/App/App";

const app = express();
const PORT = 8000;

app.use('^/$', (req, res, next) => {
    // @ts-ignore
    fs.readFile(path.resolve('./build/index.html', 'utf-8', (error, data) => {
        if (error) {
            console.log(error);

            return res.status(500).send("Something went wrong");
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`
            ));
    }));
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});