"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var superagent = require("superagent");
var config_1 = require("../config");
function parseHeaders(res) {
    var header = res && res.header ? res.header : {};
    return {
        pageSize: parseInt(header['page-size'], 10),
        count: parseInt(header.count, 10),
        totalCount: parseInt(header['total-count'], 10),
        ratelimitLimit: parseInt(header['ratelimit-limit'], 10),
        ratelimitRemaining: parseInt(header['ratelimit-remaining'], 10)
    };
}
exports.parseHeaders = parseHeaders;
function get(uri, query) {
    if (query === void 0) { query = {}; }
    return superagent
        .get(config_1.config.API_URL_V1 + uri)
        .query(query)
        .catch(function (err) {
        throw new Error(err.message);
    });
}
exports.get = get;
