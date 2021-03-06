// source: pamphlet.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.pamphlet.paphlet_services.Pamphlet', null, global);
goog.exportSymbol('proto.pamphlet.paphlet_services.PamphletDestroyRequest', null, global);
goog.exportSymbol('proto.pamphlet.paphlet_services.PamphletListRequest', null, global);
goog.exportSymbol('proto.pamphlet.paphlet_services.PamphletListResponse', null, global);
goog.exportSymbol('proto.pamphlet.paphlet_services.PamphletRetrieveRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pamphlet.paphlet_services.Pamphlet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pamphlet.paphlet_services.Pamphlet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pamphlet.paphlet_services.Pamphlet.displayName = 'proto.pamphlet.paphlet_services.Pamphlet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pamphlet.paphlet_services.PamphletListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pamphlet.paphlet_services.PamphletListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pamphlet.paphlet_services.PamphletListRequest.displayName = 'proto.pamphlet.paphlet_services.PamphletListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pamphlet.paphlet_services.PamphletListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pamphlet.paphlet_services.PamphletListResponse.repeatedFields_, null);
};
goog.inherits(proto.pamphlet.paphlet_services.PamphletListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pamphlet.paphlet_services.PamphletListResponse.displayName = 'proto.pamphlet.paphlet_services.PamphletListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pamphlet.paphlet_services.PamphletRetrieveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pamphlet.paphlet_services.PamphletRetrieveRequest.displayName = 'proto.pamphlet.paphlet_services.PamphletRetrieveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pamphlet.paphlet_services.PamphletDestroyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pamphlet.paphlet_services.PamphletDestroyRequest.displayName = 'proto.pamphlet.paphlet_services.PamphletDestroyRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.toObject = function(opt_includeInstance) {
  return proto.pamphlet.paphlet_services.Pamphlet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pamphlet.paphlet_services.Pamphlet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.Pamphlet.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: jspb.Message.getFieldWithDefault(msg, 3, ""),
    updatedAt: jspb.Message.getFieldWithDefault(msg, 4, ""),
    modifiedBy: jspb.Message.getFieldWithDefault(msg, 5, ""),
    isArchived: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pamphlet.paphlet_services.Pamphlet}
 */
proto.pamphlet.paphlet_services.Pamphlet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pamphlet.paphlet_services.Pamphlet;
  return proto.pamphlet.paphlet_services.Pamphlet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pamphlet.paphlet_services.Pamphlet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pamphlet.paphlet_services.Pamphlet}
 */
proto.pamphlet.paphlet_services.Pamphlet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUpdatedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedBy(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArchived(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pamphlet.paphlet_services.Pamphlet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pamphlet.paphlet_services.Pamphlet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.Pamphlet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getModifiedBy();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsArchived();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pamphlet.paphlet_services.Pamphlet} returns this
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pamphlet.paphlet_services.Pamphlet} returns this
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string created_at = 3;
 * @return {string}
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pamphlet.paphlet_services.Pamphlet} returns this
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string updated_at = 4;
 * @return {string}
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pamphlet.paphlet_services.Pamphlet} returns this
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string modified_by = 5;
 * @return {string}
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.getModifiedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pamphlet.paphlet_services.Pamphlet} returns this
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.setModifiedBy = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_archived = 6;
 * @return {boolean}
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.getIsArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pamphlet.paphlet_services.Pamphlet} returns this
 */
proto.pamphlet.paphlet_services.Pamphlet.prototype.setIsArchived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pamphlet.paphlet_services.PamphletListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pamphlet.paphlet_services.PamphletListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pamphlet.paphlet_services.PamphletListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.PamphletListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pamphlet.paphlet_services.PamphletListRequest}
 */
proto.pamphlet.paphlet_services.PamphletListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pamphlet.paphlet_services.PamphletListRequest;
  return proto.pamphlet.paphlet_services.PamphletListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pamphlet.paphlet_services.PamphletListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pamphlet.paphlet_services.PamphletListRequest}
 */
proto.pamphlet.paphlet_services.PamphletListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pamphlet.paphlet_services.PamphletListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pamphlet.paphlet_services.PamphletListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pamphlet.paphlet_services.PamphletListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.PamphletListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pamphlet.paphlet_services.PamphletListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pamphlet.paphlet_services.PamphletListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pamphlet.paphlet_services.PamphletListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pamphlet.paphlet_services.PamphletListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.PamphletListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultsList: jspb.Message.toObjectList(msg.getResultsList(),
    proto.pamphlet.paphlet_services.Pamphlet.toObject, includeInstance),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pamphlet.paphlet_services.PamphletListResponse}
 */
proto.pamphlet.paphlet_services.PamphletListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pamphlet.paphlet_services.PamphletListResponse;
  return proto.pamphlet.paphlet_services.PamphletListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pamphlet.paphlet_services.PamphletListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pamphlet.paphlet_services.PamphletListResponse}
 */
proto.pamphlet.paphlet_services.PamphletListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pamphlet.paphlet_services.Pamphlet;
      reader.readMessage(value,proto.pamphlet.paphlet_services.Pamphlet.deserializeBinaryFromReader);
      msg.addResults(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pamphlet.paphlet_services.PamphletListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pamphlet.paphlet_services.PamphletListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pamphlet.paphlet_services.PamphletListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.PamphletListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pamphlet.paphlet_services.Pamphlet.serializeBinaryToWriter
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * repeated Pamphlet results = 1;
 * @return {!Array<!proto.pamphlet.paphlet_services.Pamphlet>}
 */
proto.pamphlet.paphlet_services.PamphletListResponse.prototype.getResultsList = function() {
  return /** @type{!Array<!proto.pamphlet.paphlet_services.Pamphlet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pamphlet.paphlet_services.Pamphlet, 1));
};


/**
 * @param {!Array<!proto.pamphlet.paphlet_services.Pamphlet>} value
 * @return {!proto.pamphlet.paphlet_services.PamphletListResponse} returns this
*/
proto.pamphlet.paphlet_services.PamphletListResponse.prototype.setResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pamphlet.paphlet_services.Pamphlet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pamphlet.paphlet_services.Pamphlet}
 */
proto.pamphlet.paphlet_services.PamphletListResponse.prototype.addResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pamphlet.paphlet_services.Pamphlet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pamphlet.paphlet_services.PamphletListResponse} returns this
 */
proto.pamphlet.paphlet_services.PamphletListResponse.prototype.clearResultsList = function() {
  return this.setResultsList([]);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.pamphlet.paphlet_services.PamphletListResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pamphlet.paphlet_services.PamphletListResponse} returns this
 */
proto.pamphlet.paphlet_services.PamphletListResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pamphlet.paphlet_services.PamphletRetrieveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest}
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pamphlet.paphlet_services.PamphletRetrieveRequest;
  return proto.pamphlet.paphlet_services.PamphletRetrieveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest}
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pamphlet.paphlet_services.PamphletRetrieveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pamphlet.paphlet_services.PamphletRetrieveRequest} returns this
 */
proto.pamphlet.paphlet_services.PamphletRetrieveRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pamphlet.paphlet_services.PamphletDestroyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pamphlet.paphlet_services.PamphletDestroyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pamphlet.paphlet_services.PamphletDestroyRequest}
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pamphlet.paphlet_services.PamphletDestroyRequest;
  return proto.pamphlet.paphlet_services.PamphletDestroyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pamphlet.paphlet_services.PamphletDestroyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pamphlet.paphlet_services.PamphletDestroyRequest}
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pamphlet.paphlet_services.PamphletDestroyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pamphlet.paphlet_services.PamphletDestroyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pamphlet.paphlet_services.PamphletDestroyRequest} returns this
 */
proto.pamphlet.paphlet_services.PamphletDestroyRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.pamphlet.paphlet_services);
