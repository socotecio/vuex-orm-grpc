# Vuex ORM GRPC [![CircleCI](https://circleci.com/gh/socotecio/vuex-orm-grpc.svg?style=svg&circle-token=4aeecba52d18f8b5d99fbb9a1c139452dc0097eb)](https://app.circleci.com/pipelines/github/socotecio/vuex-orm-grpc)
This plugin allow you to perform grpc call from your vuex orm models

## QuickStart

### Installation

	npm install @vuex-orm/core vuex-orm-grpc --save 

### Setting up

```js
import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import VuexOrmGrpc from "vuex-orm-grpc";

Vue.use(Vuex);
VuexORM.use(VuexOrmGrpc);
```

### Model

```js
import {Model} from "@vuex-orm/core";

export default class Pamphlet extends Model {
    static entity = "Pamphlet";

    static controller = "PamphletController";

    static grpcWebPb = require("@/grpc/generated/pamhplet_grpc_web_pb");

    static grpcOptions = {
        url: "http://localhost:8082",
        credentials: null,
        options: null
    };

    static primaryKey = "uuid";

    static fields() {
        return {
            uuid: this.uid(),
            code: this.string(),
            createdAt: this.string(),
            updatedAt: this.string(),
            modifiedBy: this.string(),
            isArchived: this.boolean()
        };
    }
}
```

### Usage

#### Call

You can access all of your grpc services with **grpc()** attribute

```js
Pamphlet.grpc()
    .list(Pamphlet.grpc().PamphletListRequest, {})
    .then(r => {
        console.log(r.toObject())
        Pamphlet.insert({
            data: r.toObject().resultsList
        });
    })
    .catch(error => {
        throw new Error(error);
    });
```

### Convert your instance to requester object.

Your instance contain .$toProto() function who convert your model instance to an proto requester object. The requester
is set by Model.entity attribute.

```js
let pamphlet = new Pamphlet();

pamphlet.isArchived = false;
pamphlet.code = "Foo";
Pamphlet.grpc()
    .create(pamphlet.$toProto(), {})
    .then(r => {
        Pamphlet.insert({
            data: r.toObject()
        });
    })
    .catch(error => {
        throw new Error(error);
    });

```