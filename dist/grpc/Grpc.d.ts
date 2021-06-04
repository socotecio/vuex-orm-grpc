import { Model as BaseModel } from "@vuex-orm/core";
import { Model } from "../interfaces/Model";
import { GlobalConfig } from "../interfaces/Config";
export default class Grpc {
    model: Model & typeof BaseModel;
    config: GlobalConfig;
    client: any;
    requesters: object;
    private _promiseClientName;
    constructor(model: Model & typeof BaseModel, config: GlobalConfig);
    private registerPromiseClientInstance;
    private registerRequesters;
}
