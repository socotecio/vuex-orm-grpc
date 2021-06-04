'use strict';

class Grpc {
    constructor(model, config) {
        this.model = model;
        this.config = config;
        this.client = null;
        this.requesters = Object;
        this._promiseClientName = `${this.model.controller}PromiseClient`;
        this.registerPromiseClientInstance();
        this.registerRequesters();
        return { ...this.client, ...this.client.__proto__, ...this.requesters };
        // return this.client
    }
    registerPromiseClientInstance() {
        const url = this.model.grpcOptions.url;
        const credentials = this.model.grpcOptions.credentials;
        const options = this.model.grpcOptions.options;
        // eslint-disable-next-line no-prototype-builtins
        if (this.model.grpcWebPb.hasOwnProperty(this._promiseClientName)) {
            this.client = new this.model.grpcWebPb[this._promiseClientName](url, credentials, options);
            return;
        }
        throw new Error('[Vuex ORM Grpc] The client instance is not registered.');
    }
    registerRequesters() {
        if (this.model.grpcWebPb) {
            Object.keys(this.model.grpcWebPb)
                .filter((key) => key.includes(this.model.entity) && key.includes('Request'))
                .forEach((key) => (this.requesters[key] = new this.model.grpcWebPb[key]()));
            this.requesters[this.model.entity] = new this.model.grpcWebPb[this.model.entity]();
        }
        else {
            throw new Error('[Vuex ORM Grpc] grpc_web_pb is note defined.');
        }
    }
}

function ModelMixin(model, config) {
    /**
     * The grpc intance: Contains promise clients && requesters
     */
    model.grpc = function () {
        return new Grpc(this, config);
    };
    model.prototype.$toProto = function () {
        let requester = new this.constructor.grpcWebPb[this.constructor.entity]();
        Object.keys(this).forEach(key => {
            let key_fun = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
            if (requester[key_fun]) {
                requester[key_fun](this[key]);
            }
        });
        return requester;
    };
}

class VuexOrmGrpc {
    /**
     * Create a new Vuex ORM GRPC.
     */
    constructor(components, config) {
        this.model = components.Model;
        this.config = config;
    }
    /**
     * Plug-in Mixins.
     */
    plugin() {
        ModelMixin(this.model, this.config);
    }
}

var index = {
    install(components, options) {
        new VuexOrmGrpc(components, options).plugin();
    },
};

module.exports = index;
