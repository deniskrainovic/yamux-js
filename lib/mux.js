"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultConfig = void 0;
const constants_1 = require("./constants");
exports.defaultConfig = {
    acceptBacklog: 256,
    enableKeepAlive: true,
    keepAliveInterval: 30, // In seconds
    connectionWriteTimeout: 10, // In seconds
    maxStreamWindowSize: constants_1.initialStreamWindow,
    logger: console.log,
};
