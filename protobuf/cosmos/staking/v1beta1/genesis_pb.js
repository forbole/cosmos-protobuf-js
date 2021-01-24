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

const gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');
const cosmos_staking_v1beta1_staking_pb = require('./staking_pb.js');

goog.exportSymbol('proto.cosmos.staking.v1beta1.GenesisState', null, global);
goog.exportSymbol('proto.cosmos.staking.v1beta1.LastValidatorPower', null, global);

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
proto.cosmos.staking.v1beta1.GenesisState = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.staking.v1beta1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.staking.v1beta1.GenesisState.displayName = 'proto.cosmos.staking.v1beta1.GenesisState';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.staking.v1beta1.GenesisState.repeatedFields_ = [3, 4, 5, 6, 7];

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
  proto.cosmos.staking.v1beta1.GenesisState.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.staking.v1beta1.GenesisState.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.staking.v1beta1.GenesisState.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        params: (f = msg.getParams()) && cosmos_staking_v1beta1_staking_pb.Params.toObject(includeInstance, f),
        lastTotalPower: msg.getLastTotalPower_asB64(),
        lastValidatorPowersList: jspb.Message.toObjectList(msg.getLastValidatorPowersList(),
          proto.cosmos.staking.v1beta1.LastValidatorPower.toObject, includeInstance),
        validatorsList: jspb.Message.toObjectList(msg.getValidatorsList(),
          cosmos_staking_v1beta1_staking_pb.Validator.toObject, includeInstance),
        delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
          cosmos_staking_v1beta1_staking_pb.Delegation.toObject, includeInstance),
        unbondingDelegationsList: jspb.Message.toObjectList(msg.getUnbondingDelegationsList(),
          cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.toObject, includeInstance),
        redelegationsList: jspb.Message.toObjectList(msg.getRedelegationsList(),
          cosmos_staking_v1beta1_staking_pb.Redelegation.toObject, includeInstance),
        exported: jspb.Message.getFieldWithDefault(msg, 8, false),
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
 * @return {!proto.cosmos.staking.v1beta1.GenesisState}
 */
proto.cosmos.staking.v1beta1.GenesisState.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.staking.v1beta1.GenesisState();
  return proto.cosmos.staking.v1beta1.GenesisState.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.GenesisState}
 */
proto.cosmos.staking.v1beta1.GenesisState.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new cosmos_staking_v1beta1_staking_pb.Params();
        reader.readMessage(value, cosmos_staking_v1beta1_staking_pb.Params.deserializeBinaryFromReader);
        msg.setParams(value);
        break;
      case 2:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setLastTotalPower(value);
        break;
      case 3:
        var value = new proto.cosmos.staking.v1beta1.LastValidatorPower();
        reader.readMessage(value, proto.cosmos.staking.v1beta1.LastValidatorPower.deserializeBinaryFromReader);
        msg.addLastValidatorPowers(value);
        break;
      case 4:
        var value = new cosmos_staking_v1beta1_staking_pb.Validator();
        reader.readMessage(value, cosmos_staking_v1beta1_staking_pb.Validator.deserializeBinaryFromReader);
        msg.addValidators(value);
        break;
      case 5:
        var value = new cosmos_staking_v1beta1_staking_pb.Delegation();
        reader.readMessage(value, cosmos_staking_v1beta1_staking_pb.Delegation.deserializeBinaryFromReader);
        msg.addDelegations(value);
        break;
      case 6:
        var value = new cosmos_staking_v1beta1_staking_pb.UnbondingDelegation();
        reader.readMessage(value, cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.deserializeBinaryFromReader);
        msg.addUnbondingDelegations(value);
        break;
      case 7:
        var value = new cosmos_staking_v1beta1_staking_pb.Redelegation();
        reader.readMessage(value, cosmos_staking_v1beta1_staking_pb.Redelegation.deserializeBinaryFromReader);
        msg.addRedelegations(value);
        break;
      case 8:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setExported(value);
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
proto.cosmos.staking.v1beta1.GenesisState.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.GenesisState.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_staking_v1beta1_staking_pb.Params.serializeBinaryToWriter,
    );
  }
  f = message.getLastTotalPower_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f,
    );
  }
  f = message.getLastValidatorPowersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.cosmos.staking.v1beta1.LastValidatorPower.serializeBinaryToWriter,
    );
  }
  f = message.getValidatorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cosmos_staking_v1beta1_staking_pb.Validator.serializeBinaryToWriter,
    );
  }
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      cosmos_staking_v1beta1_staking_pb.Delegation.serializeBinaryToWriter,
    );
  }
  f = message.getUnbondingDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      cosmos_staking_v1beta1_staking_pb.UnbondingDelegation.serializeBinaryToWriter,
    );
  }
  f = message.getRedelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      cosmos_staking_v1beta1_staking_pb.Redelegation.serializeBinaryToWriter,
    );
  }
  f = message.getExported();
  if (f) {
    writer.writeBool(
      8,
      f,
    );
  }
};

/**
 * optional Params params = 1;
 * @return {?proto.cosmos.staking.v1beta1.Params}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getParams = function () {
  return /** @type{?proto.cosmos.staking.v1beta1.Params} */ (
    jspb.Message.getWrapperField(this, cosmos_staking_v1beta1_staking_pb.Params, 1));
};

/** @param {?proto.cosmos.staking.v1beta1.Params|undefined} value */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setParams = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.cosmos.staking.v1beta1.GenesisState.prototype.clearParams = function () {
  this.setParams(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.hasParams = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * optional bytes last_total_power = 2;
 * @return {!(string|Uint8Array)}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastTotalPower = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/**
 * optional bytes last_total_power = 2;
 * This is a type-conversion wrapper around `getLastTotalPower()`
 * @return {string}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastTotalPower_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
    this.getLastTotalPower(),
  ));
};

/**
 * optional bytes last_total_power = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getLastTotalPower()`
 * @return {!Uint8Array}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastTotalPower_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
    this.getLastTotalPower(),
  ));
};

/** @param {!(string|Uint8Array)} value */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setLastTotalPower = function (value) {
  jspb.Message.setProto3BytesField(this, 2, value);
};

/**
 * repeated LastValidatorPower last_validator_powers = 3;
 * @return {!Array<!proto.cosmos.staking.v1beta1.LastValidatorPower>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getLastValidatorPowersList = function () {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.LastValidatorPower>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cosmos.staking.v1beta1.LastValidatorPower, 3));
};

/** @param {!Array<!proto.cosmos.staking.v1beta1.LastValidatorPower>} value */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setLastValidatorPowersList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.cosmos.staking.v1beta1.LastValidatorPower=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.LastValidatorPower}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addLastValidatorPowers = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.staking.v1beta1.LastValidatorPower, opt_index);
};

proto.cosmos.staking.v1beta1.GenesisState.prototype.clearLastValidatorPowersList = function () {
  this.setLastValidatorPowersList([]);
};

/**
 * repeated Validator validators = 4;
 * @return {!Array<!proto.cosmos.staking.v1beta1.Validator>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getValidatorsList = function () {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.Validator>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.Validator, 4));
};

/** @param {!Array<!proto.cosmos.staking.v1beta1.Validator>} value */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setValidatorsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};

/**
 * @param {!proto.cosmos.staking.v1beta1.Validator=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.Validator}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addValidators = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cosmos.staking.v1beta1.Validator, opt_index);
};

proto.cosmos.staking.v1beta1.GenesisState.prototype.clearValidatorsList = function () {
  this.setValidatorsList([]);
};

/**
 * repeated Delegation delegations = 5;
 * @return {!Array<!proto.cosmos.staking.v1beta1.Delegation>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getDelegationsList = function () {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.Delegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.Delegation, 5));
};

/** @param {!Array<!proto.cosmos.staking.v1beta1.Delegation>} value */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setDelegationsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};

/**
 * @param {!proto.cosmos.staking.v1beta1.Delegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.Delegation}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addDelegations = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.cosmos.staking.v1beta1.Delegation, opt_index);
};

proto.cosmos.staking.v1beta1.GenesisState.prototype.clearDelegationsList = function () {
  this.setDelegationsList([]);
};

/**
 * repeated UnbondingDelegation unbonding_delegations = 6;
 * @return {!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getUnbondingDelegationsList = function () {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.UnbondingDelegation, 6));
};

/** @param {!Array<!proto.cosmos.staking.v1beta1.UnbondingDelegation>} value */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setUnbondingDelegationsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};

/**
 * @param {!proto.cosmos.staking.v1beta1.UnbondingDelegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.UnbondingDelegation}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addUnbondingDelegations = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.cosmos.staking.v1beta1.UnbondingDelegation, opt_index);
};

proto.cosmos.staking.v1beta1.GenesisState.prototype.clearUnbondingDelegationsList = function () {
  this.setUnbondingDelegationsList([]);
};

/**
 * repeated Redelegation redelegations = 7;
 * @return {!Array<!proto.cosmos.staking.v1beta1.Redelegation>}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getRedelegationsList = function () {
  return /** @type{!Array<!proto.cosmos.staking.v1beta1.Redelegation>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_staking_v1beta1_staking_pb.Redelegation, 7));
};

/** @param {!Array<!proto.cosmos.staking.v1beta1.Redelegation>} value */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setRedelegationsList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};

/**
 * @param {!proto.cosmos.staking.v1beta1.Redelegation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.staking.v1beta1.Redelegation}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.addRedelegations = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cosmos.staking.v1beta1.Redelegation, opt_index);
};

proto.cosmos.staking.v1beta1.GenesisState.prototype.clearRedelegationsList = function () {
  this.setRedelegationsList([]);
};

/**
 * optional bool exported = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cosmos.staking.v1beta1.GenesisState.prototype.getExported = function () {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};

/** @param {boolean} value */
proto.cosmos.staking.v1beta1.GenesisState.prototype.setExported = function (value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
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
proto.cosmos.staking.v1beta1.LastValidatorPower = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.staking.v1beta1.LastValidatorPower, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.staking.v1beta1.LastValidatorPower.displayName = 'proto.cosmos.staking.v1beta1.LastValidatorPower';
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
  proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.staking.v1beta1.LastValidatorPower.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.staking.v1beta1.LastValidatorPower} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.staking.v1beta1.LastValidatorPower.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        address: jspb.Message.getFieldWithDefault(msg, 1, ''),
        power: jspb.Message.getFieldWithDefault(msg, 2, 0),
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
 * @return {!proto.cosmos.staking.v1beta1.LastValidatorPower}
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.staking.v1beta1.LastValidatorPower();
  return proto.cosmos.staking.v1beta1.LastValidatorPower.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.staking.v1beta1.LastValidatorPower} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.staking.v1beta1.LastValidatorPower}
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setAddress(value);
        break;
      case 2:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setPower(value);
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
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.staking.v1beta1.LastValidatorPower.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.staking.v1beta1.LastValidatorPower} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f,
    );
  }
  f = message.getPower();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f,
    );
  }
};

/**
 * optional string address = 1;
 * @return {string}
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.getAddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.setAddress = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional int64 power = 2;
 * @return {number}
 */
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.getPower = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};

/** @param {number} value */
proto.cosmos.staking.v1beta1.LastValidatorPower.prototype.setPower = function (value) {
  jspb.Message.setProto3IntField(this, 2, value);
};

goog.object.extend(exports, proto.cosmos.staking.v1beta1);
