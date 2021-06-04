import { Components } from "./interfaces/Components";
import { GlobalConfig } from "./interfaces/Config";
import VuexOrmGrpc from "./VuexOrmGrpc";

export default {
  install(components: Components, options: GlobalConfig) {
    new VuexOrmGrpc(components, options).plugin();
  },
};
