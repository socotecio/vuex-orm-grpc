import Vue from "vue";
import Vuex, { Store } from "vuex";
import VuexORM, { Database, Model } from "@vuex-orm/core";
import VuexOrmGrpc from "../../dist/index";

Vue.use(Vuex);

export function testStore(model: typeof Model): Store<any> {
  VuexORM.use(VuexOrmGrpc);

  const database = new Database();

  database.register(model);

  return new Store({
    plugins: [VuexORM.install(database)],
    strict: true,
  });
}
