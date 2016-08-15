'use strict';
        const Model = require('./model');
        const Controller = {
        create: function(data, callback) {
        Model.create(data, callback);
        },
                find: function(query, callback) {
                Model.find(query, callback);
                },
                findOne: function(query, callback) {
                Model.findOne(query, callback);
                },
                update: function(query, mod, options) {
                options = options || {};
                        Model.update(query, mod, options)
                },
                remove: function(query, cb) {
                Model.remove(query, cb)
                }
        };
        module.exports = Controller;