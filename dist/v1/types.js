"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("./request");
exports.types = {
    all: function () {
        return request_1.get('/types').then(function (res) {
            return Object.assign(request_1.parseHeaders(res), {
                types: res.body.types
            });
        });
    }
};
exports.subtypes = {
    all: function () {
        return request_1.get('/subtypes').then(function (res) {
            return Object.assign(request_1.parseHeaders(res), {
                subtypes: res.body.subtypes
            });
        });
    }
};
exports.supertypes = {
    all: function () {
        return request_1.get('/supertypes').then(function (res) {
            return Object.assign(request_1.parseHeaders(res), {
                supertypes: res.body.supertypes
            });
        });
    }
};
