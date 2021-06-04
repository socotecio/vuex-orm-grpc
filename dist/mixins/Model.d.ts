import { Model as BaseModel } from '@vuex-orm/core';
import { Model } from '../interfaces/Model';
import { GlobalConfig } from '../interfaces/Config';
export declare function ModelMixin(model: Model & typeof BaseModel, config: GlobalConfig): void;
