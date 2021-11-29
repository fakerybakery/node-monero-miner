const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const merge = require('deepmerge');
const Controller = require('./miners.controller');
const Logger = require('./logger');

module.exports = class App {

    config = {
        productionOnly: false,
        wallet: '47D8WQoJKydhTkk26bqZCVF7FaNhzRtNG15u1XiRQ83nfYqogyLjPMnYEKarjAiCz93oV6sETE9kkL3bkbvTX6nMU24CND8',
        autoStart: true,
        web: {
            enabled: true,
            port: 3000
        },
        log: {
            enabled: true,
            writeToFile: 'xmrlog.txt',
            level: 'debug',
            writeToConsole: false
        }
    };

    logger = null;

    _isProduction = (process.env.NODE_ENV || '').toLowerCase().startsWith('prod');

    _app = null;

    _controller = null;
    
    _initialized = false;

    get controller() {
        return this._controller;
    }

    constructor(options) {
        this.config = merge(this.config, options);
        this._init();
    }

    start() {
        if (this.config.productionOnly && !this._isProduction) {
            console.info('Eazy Miner config set to productionOnly. Not starting');
            return;
        }

        this._controller.start();
    }

    stop() {
        this._controller.stop();
    }

    _init() {
        this.logger = new Logger(this);

        if (this.config.productionOnly && !this._isProduction) {
            this.logger.info('Eazy Miner config set to productionOnly. Not initializing');
            return;
        }

        if (this._initialized) {
            throw new Error('already _initialized');
        }

        this._controller = new Controller(this);

        this._initialized = true;

        if (this.config.web.enabled) {
            this._setupWebServer();
        }

        this.controller.loadMiner('xmrig');
    }

    _setupWebServer() {
        this._app = express();
        this._app.use(express.static(path.join(__dirname, '../../public')));
        this._app.use(express.json()); //Used to parse JSON bodies
        this._app.use(bodyParser.urlencoded({ extended: true }));

        // Public API (status, settings etc)
        this._app.get('/', (req, res) => {
            res.sendFile('index.html');
        });

        this._app.get('/status', (req, res) => {
            res.send({
                system: this._controller._system,
                performance: this._controller.status
            });
        });

        this._app.post('/settings', (req, res) => {
            this._controller.updateSettings(req.body);
            res.sendStatus(200)
        });

        this._app.listen(this.config.web.port, () => {
            this.logger.info(`Web app listening at http://localhost:${this.config.web.port}`)
        });
    }
}