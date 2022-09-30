"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
exports.sets = {
    where: function (query) {
        if (query === void 0) { query = {}; }
        return request_1.get('/sets', query).then(function (res) {
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
        return request_1.get('/sets/' + id).then(function (res) {
            return Object.assign(request_1.parseHeaders(res), {
                data: res.body.data
            });
        });
    },
    all: function (query) {
        if (query === void 0) { query = {}; }
        return exports.sets.where(query);
    }
};
