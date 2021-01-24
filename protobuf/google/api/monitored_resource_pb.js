/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

const jspb = require('google-protobuf');

const goog = jspb;
const global = Function('return this')();

const google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
const google_api_label_pb = require('./label_pb.js');
const google_api_launch_stage_pb = require('./launch_stage_pb.js');

goog.exportSymbol('proto.google.api.MonitoredResource', null, global);
goog.exportSymbol('proto.google.api.MonitoredResourceDescriptor', null, global);
goog.exportSymbol('proto.google.api.MonitoredResourceMetadata', null, global);

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
proto.google.api.MonitoredResourceDescriptor = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.MonitoredResourceDescriptor.repeatedFields_, null);
};
goog.inherits(proto.google.api.MonitoredResourceDescriptor, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.MonitoredResourceDescriptor.displayName = 'proto.google.api.MonitoredResourceDescriptor';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.MonitoredResourceDescriptor.repeatedFields_ = [4];

if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.google.api.MonitoredResourceDescriptor.prototype.toObject = function (opt_includeInstance) {
    return proto.google.api.MonitoredResourceDescriptor.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.MonitoredResourceDescriptor} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.google.api.MonitoredResourceDescriptor.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 5, ''),
        type: jspb.Message.getFieldWithDefault(msg, 1, ''),
        displayName: jspb.Message.getFieldWithDefault(msg, 2, ''),
        description: jspb.Message.getFieldWithDefault(msg, 3, ''),
        labelsList: jspb.Message.toObjectList(msg.getLabelsList(),
          google_api_label_pb.LabelDescriptor.toObject, includeInstance),
        launchStage: jspb.Message.getFieldWithDefault(msg, 7, 0),
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
 * @return {!proto.google.api.MonitoredResourceDescriptor}
 */
proto.google.api.MonitoredResourceDescriptor.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.google.api.MonitoredResourceDescriptor();
  return proto.google.api.MonitoredResourceDescriptor.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.MonitoredResourceDescriptor} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.MonitoredResourceDescriptor}
 */
proto.google.api.MonitoredResourceDescriptor.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 5:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setType(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setDisplayName(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setDescription(value);
        break;
      case 4:
        var value = new google_api_label_pb.LabelDescriptor();
        reader.readMessage(value, google_api_label_pb.LabelDescriptor.deserializeBinaryFromReader);
        msg.addLabels(value);
        break;
      case 7:
        var value = /** @type {!proto.google.api.LaunchStage} */ (reader.readEnum());
        msg.setLaunchStage(value);
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
proto.google.api.MonitoredResourceDescriptor.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.google.api.MonitoredResourceDescriptor.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.MonitoredResourceDescriptor} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.MonitoredResourceDescriptor.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f,
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f,
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f,
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f,
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      google_api_label_pb.LabelDescriptor.serializeBinaryToWriter,
    );
  }
  f = message.getLaunchStage();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f,
    );
  }
};

/**
 * optional string name = 5;
 * @return {string}
 */
proto.google.api.MonitoredResourceDescriptor.prototype.getName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
};

/** @param {string} value */
proto.google.api.MonitoredResourceDescriptor.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 5, value);
};

/**
 * optional string type = 1;
 * @return {string}
 */
proto.google.api.MonitoredResourceDescriptor.prototype.getType = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.google.api.MonitoredResourceDescriptor.prototype.setType = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string display_name = 2;
 * @return {string}
 */
proto.google.api.MonitoredResourceDescriptor.prototype.getDisplayName = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.google.api.MonitoredResourceDescriptor.prototype.setDisplayName = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string description = 3;
 * @return {string}
 */
proto.google.api.MonitoredResourceDescriptor.prototype.getDescription = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.google.api.MonitoredResourceDescriptor.prototype.setDescription = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * repeated LabelDescriptor labels = 4;
 * @return {!Array<!proto.google.api.LabelDescriptor>}
 */
proto.google.api.MonitoredResourceDescriptor.prototype.getLabelsList = function () {
  return /** @type{!Array<!proto.google.api.LabelDescriptor>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_api_label_pb.LabelDescriptor, 4));
};

/** @param {!Array<!proto.google.api.LabelDescriptor>} value */
proto.google.api.MonitoredResourceDescriptor.prototype.setLabelsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.google.api.LabelDescriptor=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.LabelDescriptor}
 */
proto.google.api.MonitoredResourceDescriptor.prototype.addLabels = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.api.LabelDescriptor, opt_index);
};

proto.google.api.MonitoredResourceDescriptor.prototype.clearLabelsList = function () {
  this.setLabelsList([]);
};

/**
 * optional LaunchStage launch_stage = 7;
 * @return {!proto.google.api.LaunchStage}
 */
proto.google.api.MonitoredResourceDescriptor.prototype.getLaunchStage = function () {
  return /** @type {!proto.google.api.LaunchStage} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/** @param {!proto.google.api.LaunchStage} value */
proto.google.api.MonitoredResourceDescriptor.prototype.setLaunchStage = function (value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};

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
proto.google.api.MonitoredResource = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.MonitoredResource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.MonitoredResource.displayName = 'proto.google.api.MonitoredResource';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.google.api.MonitoredResource.prototype.toObject = function (opt_includeInstance) {
    return proto.google.api.MonitoredResource.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.MonitoredResource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.google.api.MonitoredResource.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        type: jspb.Message.getFieldWithDefault(msg, 1, ''),
        labelsMap: (f = msg.getLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
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
 * @return {!proto.google.api.MonitoredResource}
 */
proto.google.api.MonitoredResource.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.google.api.MonitoredResource();
  return proto.google.api.MonitoredResource.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.MonitoredResource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.MonitoredResource}
 */
proto.google.api.MonitoredResource.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setType(value);
        break;
      case 2:
        var value = msg.getLabelsMap();
        reader.readMessage(value, (message, reader) => {
          jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, '');
        });
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
proto.google.api.MonitoredResource.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.google.api.MonitoredResource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.MonitoredResource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.MonitoredResource.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f,
    );
  }
  f = message.getLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};

/**
 * optional string type = 1;
 * @return {string}
 */
proto.google.api.MonitoredResource.prototype.getType = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.google.api.MonitoredResource.prototype.setType = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * map<string, string> labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.api.MonitoredResource.prototype.getLabelsMap = function (opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
    jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};

proto.google.api.MonitoredResource.prototype.clearLabelsMap = function () {
  this.getLabelsMap().clear();
};

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
proto.google.api.MonitoredResourceMetadata = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.MonitoredResourceMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.google.api.MonitoredResourceMetadata.displayName = 'proto.google.api.MonitoredResourceMetadata';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
  proto.google.api.MonitoredResourceMetadata.prototype.toObject = function (opt_includeInstance) {
    return proto.google.api.MonitoredResourceMetadata.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.MonitoredResourceMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.google.api.MonitoredResourceMetadata.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        systemLabels: (f = msg.getSystemLabels()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
        userLabelsMap: (f = msg.getUserLabelsMap()) ? f.toObject(includeInstance, undefined) : [],
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
 * @return {!proto.google.api.MonitoredResourceMetadata}
 */
proto.google.api.MonitoredResourceMetadata.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.google.api.MonitoredResourceMetadata();
  return proto.google.api.MonitoredResourceMetadata.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.MonitoredResourceMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.MonitoredResourceMetadata}
 */
proto.google.api.MonitoredResourceMetadata.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new google_protobuf_struct_pb.Struct();
        reader.readMessage(value, google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
        msg.setSystemLabels(value);
        break;
      case 2:
        var value = msg.getUserLabelsMap();
        reader.readMessage(value, (message, reader) => {
          jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, '');
        });
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
proto.google.api.MonitoredResourceMetadata.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.google.api.MonitoredResourceMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.MonitoredResourceMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.MonitoredResourceMetadata.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getSystemLabels();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter,
    );
  }
  f = message.getUserLabelsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};

/**
 * optional google.protobuf.Struct system_labels = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.google.api.MonitoredResourceMetadata.prototype.getSystemLabels = function () {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};

/** @param {?proto.google.protobuf.Struct|undefined} value */
proto.google.api.MonitoredResourceMetadata.prototype.setSystemLabels = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.google.api.MonitoredResourceMetadata.prototype.clearSystemLabels = function () {
  this.setSystemLabels(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.google.api.MonitoredResourceMetadata.prototype.hasSystemLabels = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * map<string, string> user_labels = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.google.api.MonitoredResourceMetadata.prototype.getUserLabelsMap = function (opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
    jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};

proto.google.api.MonitoredResourceMetadata.prototype.clearUserLabelsMap = function () {
  this.getUserLabelsMap().clear();
};

goog.object.extend(exports, proto.google.api);
