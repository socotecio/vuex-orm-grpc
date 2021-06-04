import { Model as BaseModel } from '@vuex-orm/core';
import { Model } from './interfaces/Model';
import { Components } from './interfaces/Components';
import { GlobalConfig } from './interfaces/Config';
import { ModelMixin } from './mixins/Model';

export default class VuexOrmGrpc {
  /**
   * Model class.
   */
  model: Model & typeof BaseModel;

  /**
   * The configuration object.
   */
  config: GlobalConfig;

  /**
   * Create a new Vuex ORM GRPC.
   */
  constructor(components: Components, config: GlobalConfig) {
    this.model = components.Model;
    this.config = config;
  }

  /**
   * Plug-in Mixins.
   */
  plugin(): void {
    ModelMixin(this.model, this.config);
  }
}
