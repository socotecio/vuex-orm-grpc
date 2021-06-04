import { Model as BaseModel } from '@vuex-orm/core';
import { Model } from '../interfaces/Model';
import { GlobalConfig } from '../interfaces/Config';
import Grpc from '../grpc/Grpc';

export function ModelMixin(model: Model & typeof BaseModel, config: GlobalConfig): void {
  /**
   * The grpc intance: Contains promise clients && requesters
   */
  model.grpc = function (): Grpc {
    return new Grpc(this, config);
  };
  model.prototype.$toProto = function() {
    let requester = new this.constructor.grpcWebPb[this.constructor.entity]()
    Object.keys(this).forEach(key => {
      let key_fun = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
      if (requester[key_fun]) {
        requester[key_fun](this[key]);
      }
    });
    return requester;
  };
}
