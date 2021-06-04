import { Model as BaseModel } from "@vuex-orm/core";
import { Model } from "./Model";
export interface Components {
    Model: Model & typeof BaseModel;
}
