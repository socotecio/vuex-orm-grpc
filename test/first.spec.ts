// @ts-nocheck
import { Model } from "@vuex-orm/core";
import { testStore } from "./helpers/NewStore";

describe("First Test", function () {
  class Pamphlet extends Model {
    static entity = "Pamphlet";

    static controller = "PamphletController";

    static grpcWebPb = require("./grpc/js/pamphlet_grpc_web_pb");

    static grpcOptions = {
      url: process.env.VUE_APP_TEST_INFRA_BACK_GRPC_PROXY_URL,
      credentials: null,
      options: null,
    };

    static primaryKey = "uuid";

    static fields() {
      return {
        uuid: this.uid(),
        code: this.string(null).nullable(),
        createdAt: this.string(null).nullable(),
        updatedAt: this.string(null).nullable(),
        modifiedBy: this.string(null).nullable(),
        isArchived: this.boolean(null).nullable(),
      };
    }
  }

  it("should be an Pamphlet instance", function () {
    let my_pamphlet = new Pamphlet();
    expect(my_pamphlet).toBeInstanceOf(Pamphlet);
  });

  it("should not contain grpc function", function () {
    expect(Pamphlet).not.toHaveProperty("grpc");
  });

  it("should contain grpc function", function () {
    const store = testStore(Pamphlet);
    expect(Pamphlet).toHaveProperty("grpc");
  });
  it("should contain PamphletControllerPromiseClient services", function () {
    const store = testStore(Pamphlet);
    expect(Pamphlet.grpc()).toHaveProperty("list");
    expect(Pamphlet.grpc()).toHaveProperty("create");
    expect(Pamphlet.grpc()).toHaveProperty("retrieve");
    expect(Pamphlet.grpc()).toHaveProperty("update");
    expect(Pamphlet.grpc()).toHaveProperty("destroy");
  });

  it("should contain Pamphlet requesters", function () {
    const store = testStore(Pamphlet);
    expect(Pamphlet.grpc()).toHaveProperty("PamphletDestroyRequest");
    expect(Pamphlet.grpc()).toHaveProperty("PamphletListRequest");
    expect(Pamphlet.grpc()).toHaveProperty("PamphletRetrieveRequest");
    expect(Pamphlet.grpc()).toHaveProperty("Pamphlet");
  });

  it("should convert object to Requester message", function () {
    const store = testStore(Pamphlet);
    const uuid = "aac5944a-d95f-4747-8cc9-4041f51510ae";
    let my_pamphlet = new Pamphlet({
      uuid: uuid,
      code: "2VBAK",
      isArchived: false,
      modifiedBy: "toto@foo.fr",
    });
    Pamphlet.insert({ data: my_pamphlet });
    expect(Pamphlet.all()).toHaveLength(1);
    expect(my_pamphlet).toHaveProperty("$toProto");
    let requester_message = my_pamphlet.$toProto();
    expect(requester_message).toHaveProperty("toObject");
    expect(requester_message.toObject()).toHaveProperty("uuid");
    expect(requester_message.toObject().uuid).toEqual(uuid);
  });
});
