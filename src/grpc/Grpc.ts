import { Model as BaseModel } from "@vuex-orm/core";
import { Model } from "../interfaces/Model";
import { GlobalConfig } from "../interfaces/Config";

export default class Grpc {
  model: Model & typeof BaseModel;
  config: GlobalConfig;
  client: any;
  requesters: object;
  private _promiseClientName: string;

  constructor(model: Model & typeof BaseModel, config: GlobalConfig) {
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

  private registerPromiseClientInstance(): void {
    if (this.model.grpcWebPb.hasOwnProperty(this._promiseClientName)) {
      if (typeof this.model.grpcWebPb[this._promiseClientName] === "object") {
        this.client = this.model.grpcWebPb[this._promiseClientName];
      } else {
        const url = this.model.grpcOptions.url;
        const credentials = this.model.grpcOptions.credentials;
        const options = this.model.grpcOptions.options;
        this.client = new this.model.grpcWebPb[this._promiseClientName](
          url,
          credentials,
          options
        );
      }
      return;
    }
    throw new Error("[Vuex ORM Grpc] The client instance is not registered.");
  }

  private registerRequesters(): void {
    if (this.model.grpcWebPb) {
      Object.keys(this.model.grpcWebPb)
        .filter(
          (key) => key.includes(this.model.entity) && key.includes("Request")
        )
        .forEach(
          (key) => (this.requesters[key] = new this.model.grpcWebPb[key]())
        );
      this.requesters[this.model.entity] = new this.model.grpcWebPb[
        this.model.entity
      ]();
    } else {
      throw new Error("[Vuex ORM Grpc] grpc_web_pb is note defined.");
    }
  }
}
