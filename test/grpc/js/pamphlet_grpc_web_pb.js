/**
 * @fileoverview gRPC-Web generated client stub for pamphlet.paphlet_services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.pamphlet = {};
proto.pamphlet.paphlet_services = require('./pamphlet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pamphlet.paphlet_services.PamphletControllerClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pamphlet.paphlet_services.PamphletControllerPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pamphlet.paphlet_services.PamphletListRequest,
 *   !proto.pamphlet.paphlet_services.PamphletListResponse>}
 */
const methodDescriptor_PamphletController_List = new grpc.web.MethodDescriptor(
  '/pamphlet.paphlet_services.PamphletController/List',
  grpc.web.MethodType.UNARY,
  proto.pamphlet.paphlet_services.PamphletListRequest,
  proto.pamphlet.paphlet_services.PamphletListResponse,
  /**
   * @param {!proto.pamphlet.paphlet_services.PamphletListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pamphlet.paphlet_services.PamphletListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pamphlet.paphlet_services.PamphletListRequest,
 *   !proto.pamphlet.paphlet_services.PamphletListResponse>}
 */
const methodInfo_PamphletController_List = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pamphlet.paphlet_services.PamphletListResponse,
  /**
   * @param {!proto.pamphlet.paphlet_services.PamphletListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pamphlet.paphlet_services.PamphletListResponse.deserializeBinary
);


/**
 * @param {!proto.pamphlet.paphlet_services.PamphletListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pamphlet.paphlet_services.PamphletListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pamphlet.paphlet_services.PamphletListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pamphlet.paphlet_services.PamphletControllerClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/List',
      request,
      metadata || {},
      methodDescriptor_PamphletController_List,
      callback);
};


/**
 * @param {!proto.pamphlet.paphlet_services.PamphletListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pamphlet.paphlet_services.PamphletListResponse>}
 *     Promise that resolves to the response
 */
proto.pamphlet.paphlet_services.PamphletControllerPromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/List',
      request,
      metadata || {},
      methodDescriptor_PamphletController_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pamphlet.paphlet_services.Pamphlet,
 *   !proto.pamphlet.paphlet_services.Pamphlet>}
 */
const methodDescriptor_PamphletController_Create = new grpc.web.MethodDescriptor(
  '/pamphlet.paphlet_services.PamphletController/Create',
  grpc.web.MethodType.UNARY,
  proto.pamphlet.paphlet_services.Pamphlet,
  proto.pamphlet.paphlet_services.Pamphlet,
  /**
   * @param {!proto.pamphlet.paphlet_services.Pamphlet} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pamphlet.paphlet_services.Pamphlet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pamphlet.paphlet_services.Pamphlet,
 *   !proto.pamphlet.paphlet_services.Pamphlet>}
 */
const methodInfo_PamphletController_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pamphlet.paphlet_services.Pamphlet,
  /**
   * @param {!proto.pamphlet.paphlet_services.Pamphlet} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pamphlet.paphlet_services.Pamphlet.deserializeBinary
);


/**
 * @param {!proto.pamphlet.paphlet_services.Pamphlet} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pamphlet.paphlet_services.Pamphlet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pamphlet.paphlet_services.Pamphlet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pamphlet.paphlet_services.PamphletControllerClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/Create',
      request,
      metadata || {},
      methodDescriptor_PamphletController_Create,
      callback);
};


/**
 * @param {!proto.pamphlet.paphlet_services.Pamphlet} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pamphlet.paphlet_services.Pamphlet>}
 *     Promise that resolves to the response
 */
proto.pamphlet.paphlet_services.PamphletControllerPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/Create',
      request,
      metadata || {},
      methodDescriptor_PamphletController_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pamphlet.paphlet_services.PamphletRetrieveRequest,
 *   !proto.pamphlet.paphlet_services.Pamphlet>}
 */
const methodDescriptor_PamphletController_Retrieve = new grpc.web.MethodDescriptor(
  '/pamphlet.paphlet_services.PamphletController/Retrieve',
  grpc.web.MethodType.UNARY,
  proto.pamphlet.paphlet_services.PamphletRetrieveRequest,
  proto.pamphlet.paphlet_services.Pamphlet,
  /**
   * @param {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pamphlet.paphlet_services.Pamphlet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pamphlet.paphlet_services.PamphletRetrieveRequest,
 *   !proto.pamphlet.paphlet_services.Pamphlet>}
 */
const methodInfo_PamphletController_Retrieve = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pamphlet.paphlet_services.Pamphlet,
  /**
   * @param {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pamphlet.paphlet_services.Pamphlet.deserializeBinary
);


/**
 * @param {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pamphlet.paphlet_services.Pamphlet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pamphlet.paphlet_services.Pamphlet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pamphlet.paphlet_services.PamphletControllerClient.prototype.retrieve =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_PamphletController_Retrieve,
      callback);
};


/**
 * @param {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pamphlet.paphlet_services.Pamphlet>}
 *     Promise that resolves to the response
 */
proto.pamphlet.paphlet_services.PamphletControllerPromiseClient.prototype.retrieve =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/Retrieve',
      request,
      metadata || {},
      methodDescriptor_PamphletController_Retrieve);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pamphlet.paphlet_services.Pamphlet,
 *   !proto.pamphlet.paphlet_services.Pamphlet>}
 */
const methodDescriptor_PamphletController_Update = new grpc.web.MethodDescriptor(
  '/pamphlet.paphlet_services.PamphletController/Update',
  grpc.web.MethodType.UNARY,
  proto.pamphlet.paphlet_services.Pamphlet,
  proto.pamphlet.paphlet_services.Pamphlet,
  /**
   * @param {!proto.pamphlet.paphlet_services.Pamphlet} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pamphlet.paphlet_services.Pamphlet.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pamphlet.paphlet_services.Pamphlet,
 *   !proto.pamphlet.paphlet_services.Pamphlet>}
 */
const methodInfo_PamphletController_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pamphlet.paphlet_services.Pamphlet,
  /**
   * @param {!proto.pamphlet.paphlet_services.Pamphlet} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pamphlet.paphlet_services.Pamphlet.deserializeBinary
);


/**
 * @param {!proto.pamphlet.paphlet_services.Pamphlet} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pamphlet.paphlet_services.Pamphlet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pamphlet.paphlet_services.Pamphlet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pamphlet.paphlet_services.PamphletControllerClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/Update',
      request,
      metadata || {},
      methodDescriptor_PamphletController_Update,
      callback);
};


/**
 * @param {!proto.pamphlet.paphlet_services.Pamphlet} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pamphlet.paphlet_services.Pamphlet>}
 *     Promise that resolves to the response
 */
proto.pamphlet.paphlet_services.PamphletControllerPromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/Update',
      request,
      metadata || {},
      methodDescriptor_PamphletController_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pamphlet.paphlet_services.PamphletDestroyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PamphletController_Destroy = new grpc.web.MethodDescriptor(
  '/pamphlet.paphlet_services.PamphletController/Destroy',
  grpc.web.MethodType.UNARY,
  proto.pamphlet.paphlet_services.PamphletDestroyRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pamphlet.paphlet_services.PamphletDestroyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pamphlet.paphlet_services.PamphletDestroyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PamphletController_Destroy = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.pamphlet.paphlet_services.PamphletDestroyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.pamphlet.paphlet_services.PamphletDestroyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pamphlet.paphlet_services.PamphletControllerClient.prototype.destroy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/Destroy',
      request,
      metadata || {},
      methodDescriptor_PamphletController_Destroy,
      callback);
};


/**
 * @param {!proto.pamphlet.paphlet_services.PamphletDestroyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.pamphlet.paphlet_services.PamphletControllerPromiseClient.prototype.destroy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pamphlet.paphlet_services.PamphletController/Destroy',
      request,
      metadata || {},
      methodDescriptor_PamphletController_Destroy);
};


module.exports = proto.pamphlet.paphlet_services;

