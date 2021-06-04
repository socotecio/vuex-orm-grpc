import Grpc from "../grpc/Grpc";
export function ModelMixin(model, config) {
    /**
     * The grpc intance: Contains promise clients && requesters
     */
    model.grpc = function () {
        return new Grpc(this, config);
    };
    model.prototype.$toProto = function () {
        const requester = new this.constructor.grpcWebPb[this.constructor.entity]();
        Object.keys(this).forEach((key) => {
            const keyFun = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`;
            if (requester[keyFun]) {
                requester[keyFun](this[key]);
            }
        });
        return requester;
    };
}
