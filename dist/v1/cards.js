"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
exports.cards = {
    where: function (query) {
        if (query === void 0) { query = {}; }
        return request_1.get('/cards', query).then(function (res) {
            return Object.assign(request_1.parseHeaders(res), {
                data: res.body.data,
                count: res.body.count,
                page: res.body.page,
                pageSize: res.body.pageSize,
                totalCount: res.body.totalCount
            });
        });
    },
    find: function (id) {
        return request_1.get('/cards/' + id).then(function (res) {
            return Object.assign(request_1.parseHeaders(res), {
                data: res.body.data
            });
        });
    },
    all: function (query) {
        if (query === void 0) { query = {}; }
        return exports.cards.where(query);
    }
};
