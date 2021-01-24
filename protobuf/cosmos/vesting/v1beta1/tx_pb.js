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
const cosmos_base_v1beta1_coin_pb = require('../../base/v1beta1/coin_pb.js');

goog.exportSymbol('proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount', null, global);
goog.exportSymbol('proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse', null, global);

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
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.repeatedFields_, null);
};
goog.inherits(proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.displayName = 'proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.repeatedFields_ = [3];

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
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        fromAddress: jspb.Message.getFieldWithDefault(msg, 1, ''),
        toAddress: jspb.Message.getFieldWithDefault(msg, 2, ''),
        amountList: jspb.Message.toObjectList(msg.getAmountList(),
          cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
        endTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
        delayed: jspb.Message.getFieldWithDefault(msg, 5, false),
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
 * @return {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount();
  return proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setFromAddress(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setToAddress(value);
        break;
      case 3:
        var value = new cosmos_base_v1beta1_coin_pb.Coin();
        reader.readMessage(value, cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
        msg.addAmount(value);
        break;
      case 4:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setEndTime(value);
        break;
      case 5:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setDelayed(value);
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
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getFromAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f,
    );
  }
  f = message.getToAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f,
    );
  }
  f = message.getAmountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter,
    );
  }
  f = message.getEndTime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f,
    );
  }
  f = message.getDelayed();
  if (f) {
    writer.writeBool(
      5,
      f,
    );
  }
};

/**
 * optional string from_address = 1;
 * @return {string}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.getFromAddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.setFromAddress = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string to_address = 2;
 * @return {string}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.getToAddress = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.setToAddress = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * repeated cosmos.base.v1beta1.Coin amount = 3;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.getAmountList = function () {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};

/** @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.setAmountList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.addAmount = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};

proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.clearAmountList = function () {
  this.setAmountList([]);
};

/**
 * optional int64 end_time = 4;
 * @return {number}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.getEndTime = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};

/** @param {number} value */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.setEndTime = function (value) {
  jspb.Message.setProto3IntField(this, 4, value);
};

/**
 * optional bool delayed = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.getDelayed = function () {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};

/** @param {boolean} value */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccount.prototype.setDelayed = function (value) {
  jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.displayName = 'proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse';
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
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.toObject = function (includeInstance, msg) {
    let f; const
      obj = {

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
 * @return {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse();
  return proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse}
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
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
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse.serializeBinaryToWriter = function (message, writer) {
  const f;
};

goog.object.extend(exports, proto.cosmos.vesting.v1beta1);
