import { Model as BaseModel } from "@vuex-orm/core";
import { Model } from "../interfaces/Model";
import { GlobalConfig } from "../interfaces/Config";
import Grpc from "../grpc/Grpc";

export function ModelMixin(
  model: Model & typeof BaseModel,
  config: GlobalConfig
): void {
  /**
   * The grpc intance: Contains promise clients && requesters
   */
  model.grpc = function (): Grpc {
    return new Grpc(this, config);
  };
  model.prototype.$toProto = function () {
    const requester = new this.constructor.grpcWebPb[this.constructor.entity]();
    Object.keys(this).forEach((key) => {
      const keyFun = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
      if (requester[keyFun]) {
        requester[keyFun](this[key]);
      }
    });
    return requester;
  };
}
