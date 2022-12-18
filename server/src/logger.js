const fs = require('fs');
module.exports = class Logger {

    _app = null;

    _logger = null;
    
    _log = "";

    constructor(app) {
        this._app = app;

        this._init();
    }

    log(value) {
        this._log += value;
        this._log += "\n"
        fs.appendFileSync(this._app.config.log.writeToFile, this._log);
    }

    info(value) {
        this._log += value;
        this._log += "\n"
        fs.appendFileSync(this._app.config.log.writeToFile, this._log);
    }

    warn(value) {
        this._log += value;
        this._log += "\n"
        fs.appendFileSync(this._app.config.log.writeToFile, this._log);
    }

    error(value) {
        this._log += value;
        this._log += "\n"
        fs.appendFileSync(this._app.config.log.writeToFile, this._log);
    }

    _init(config) {
//      const options = {
//          level: 'debug',
//          format: winston.format.json(),
//          // defaultMeta: { service: 'user-service' },
//          transports: [],
//      };
//
//      if (this._app.config.log.writeToFile) {
//          options.transports.push(new winston.transports.File({ filename: this._app.config.log.writeToFile }))
//      }
//
//      this._logger = winston.createLogger(options);
//
//      //
//      // If we're not in production then log to the `console` with the format:
//      // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//      //
//      if (this._app.config.log.writeToConsole) {
//          this._logger.add(new winston.transports.Console({
//              format: winston.format.simple(),
//          }));
//      }
    }
}



