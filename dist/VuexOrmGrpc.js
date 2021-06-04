import { ModelMixin } from './mixins/Model';
export default class VuexOrmGrpc {
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
