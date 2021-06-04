import { Model as BaseModel } from '@vuex-orm/core';
import { Model } from './interfaces/Model';
import { Components } from './interfaces/Components';
import { GlobalConfig } from './interfaces/Config';
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
    constructor(components: Components, config: GlobalConfig);
    /**
     * Plug-in Mixins.
     */
    plugin(): void;
}
