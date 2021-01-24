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

const google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
const cosmos_base_v1beta1_coin_pb = require('../../base/v1beta1/coin_pb.js');
const cosmos_gov_v1beta1_gov_pb = require('./gov_pb.js');
const cosmos_proto_cosmos_pb = require('../../../cosmos_proto/cosmos_pb.js');
const gogoproto_gogo_pb = require('../../../gogoproto/gogo_pb.js');

goog.exportSymbol('proto.cosmos.gov.v1beta1.MsgDeposit', null, global);
goog.exportSymbol('proto.cosmos.gov.v1beta1.MsgDepositResponse', null, global);
goog.exportSymbol('proto.cosmos.gov.v1beta1.MsgSubmitProposal', null, global);
goog.exportSymbol('proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse', null, global);
goog.exportSymbol('proto.cosmos.gov.v1beta1.MsgVote', null, global);
goog.exportSymbol('proto.cosmos.gov.v1beta1.MsgVoteResponse', null, global);

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
proto.cosmos.gov.v1beta1.MsgSubmitProposal = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.gov.v1beta1.MsgSubmitProposal.repeatedFields_, null);
};
goog.inherits(proto.cosmos.gov.v1beta1.MsgSubmitProposal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.gov.v1beta1.MsgSubmitProposal.displayName = 'proto.cosmos.gov.v1beta1.MsgSubmitProposal';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.repeatedFields_ = [2];

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
  proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.gov.v1beta1.MsgSubmitProposal.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.gov.v1beta1.MsgSubmitProposal.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        content: (f = msg.getContent()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
        initialDepositList: jspb.Message.toObjectList(msg.getInitialDepositList(),
          cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
        proposer: jspb.Message.getFieldWithDefault(msg, 3, ''),
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
 * @return {!proto.cosmos.gov.v1beta1.MsgSubmitProposal}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.gov.v1beta1.MsgSubmitProposal();
  return proto.cosmos.gov.v1beta1.MsgSubmitProposal.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.gov.v1beta1.MsgSubmitProposal}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new google_protobuf_any_pb.Any();
        reader.readMessage(value, google_protobuf_any_pb.Any.deserializeBinaryFromReader);
        msg.setContent(value);
        break;
      case 2:
        var value = new cosmos_base_v1beta1_coin_pb.Coin();
        reader.readMessage(value, cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
        msg.addInitialDeposit(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setProposer(value);
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
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.gov.v1beta1.MsgSubmitProposal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter,
    );
  }
  f = message.getInitialDepositList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter,
    );
  }
  f = message.getProposer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f,
    );
  }
};

/**
 * optional google.protobuf.Any content = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.getContent = function () {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};

/** @param {?proto.google.protobuf.Any|undefined} value */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.setContent = function (value) {
  jspb.Message.setWrapperField(this, 1, value);
};

proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.clearContent = function () {
  this.setContent(undefined);
};

/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.hasContent = function () {
  return jspb.Message.getField(this, 1) != null;
};

/**
 * repeated cosmos.base.v1beta1.Coin initial_deposit = 2;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.getInitialDepositList = function () {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 2));
};

/** @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.setInitialDepositList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};

/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.addInitialDeposit = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};

proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.clearInitialDepositList = function () {
  this.setInitialDepositList([]);
};

/**
 * optional string proposer = 3;
 * @return {string}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.getProposer = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
};

/** @param {string} value */
proto.cosmos.gov.v1beta1.MsgSubmitProposal.prototype.setProposer = function (value) {
  jspb.Message.setProto3StringField(this, 3, value);
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
proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.displayName = 'proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse';
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
  proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        proposalId: jspb.Message.getFieldWithDefault(msg, 1, 0),
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
 * @return {!proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse();
  return proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setProposalId(value);
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
proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getProposalId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f,
    );
  }
};

/**
 * optional uint64 proposal_id = 1;
 * @return {number}
 */
proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.prototype.getProposalId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.cosmos.gov.v1beta1.MsgSubmitProposalResponse.prototype.setProposalId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
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
proto.cosmos.gov.v1beta1.MsgVote = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.gov.v1beta1.MsgVote, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.gov.v1beta1.MsgVote.displayName = 'proto.cosmos.gov.v1beta1.MsgVote';
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
  proto.cosmos.gov.v1beta1.MsgVote.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.gov.v1beta1.MsgVote.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.gov.v1beta1.MsgVote} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.gov.v1beta1.MsgVote.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        proposalId: jspb.Message.getFieldWithDefault(msg, 1, 0),
        voter: jspb.Message.getFieldWithDefault(msg, 2, ''),
        option: jspb.Message.getFieldWithDefault(msg, 3, 0),
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
 * @return {!proto.cosmos.gov.v1beta1.MsgVote}
 */
proto.cosmos.gov.v1beta1.MsgVote.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.gov.v1beta1.MsgVote();
  return proto.cosmos.gov.v1beta1.MsgVote.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.gov.v1beta1.MsgVote} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.gov.v1beta1.MsgVote}
 */
proto.cosmos.gov.v1beta1.MsgVote.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setProposalId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setVoter(value);
        break;
      case 3:
        var value = /** @type {!proto.cosmos.gov.v1beta1.VoteOption} */ (reader.readEnum());
        msg.setOption(value);
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
proto.cosmos.gov.v1beta1.MsgVote.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.gov.v1beta1.MsgVote.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.gov.v1beta1.MsgVote} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.gov.v1beta1.MsgVote.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getProposalId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f,
    );
  }
  f = message.getVoter();
  if (f.length > 0) {
    writer.writeString(
      2,
      f,
    );
  }
  f = message.getOption();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f,
    );
  }
};

/**
 * optional uint64 proposal_id = 1;
 * @return {number}
 */
proto.cosmos.gov.v1beta1.MsgVote.prototype.getProposalId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.cosmos.gov.v1beta1.MsgVote.prototype.setProposalId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string voter = 2;
 * @return {string}
 */
proto.cosmos.gov.v1beta1.MsgVote.prototype.getVoter = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.cosmos.gov.v1beta1.MsgVote.prototype.setVoter = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional VoteOption option = 3;
 * @return {!proto.cosmos.gov.v1beta1.VoteOption}
 */
proto.cosmos.gov.v1beta1.MsgVote.prototype.getOption = function () {
  return /** @type {!proto.cosmos.gov.v1beta1.VoteOption} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};

/** @param {!proto.cosmos.gov.v1beta1.VoteOption} value */
proto.cosmos.gov.v1beta1.MsgVote.prototype.setOption = function (value) {
  jspb.Message.setProto3EnumField(this, 3, value);
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
proto.cosmos.gov.v1beta1.MsgVoteResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.gov.v1beta1.MsgVoteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.gov.v1beta1.MsgVoteResponse.displayName = 'proto.cosmos.gov.v1beta1.MsgVoteResponse';
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
  proto.cosmos.gov.v1beta1.MsgVoteResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.gov.v1beta1.MsgVoteResponse.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.gov.v1beta1.MsgVoteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.gov.v1beta1.MsgVoteResponse.toObject = function (includeInstance, msg) {
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
 * @return {!proto.cosmos.gov.v1beta1.MsgVoteResponse}
 */
proto.cosmos.gov.v1beta1.MsgVoteResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.gov.v1beta1.MsgVoteResponse();
  return proto.cosmos.gov.v1beta1.MsgVoteResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.gov.v1beta1.MsgVoteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.gov.v1beta1.MsgVoteResponse}
 */
proto.cosmos.gov.v1beta1.MsgVoteResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.cosmos.gov.v1beta1.MsgVoteResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.gov.v1beta1.MsgVoteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.gov.v1beta1.MsgVoteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.gov.v1beta1.MsgVoteResponse.serializeBinaryToWriter = function (message, writer) {
  const f;
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
proto.cosmos.gov.v1beta1.MsgDeposit = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.gov.v1beta1.MsgDeposit.repeatedFields_, null);
};
goog.inherits(proto.cosmos.gov.v1beta1.MsgDeposit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.gov.v1beta1.MsgDeposit.displayName = 'proto.cosmos.gov.v1beta1.MsgDeposit';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.gov.v1beta1.MsgDeposit.repeatedFields_ = [3];

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
  proto.cosmos.gov.v1beta1.MsgDeposit.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.gov.v1beta1.MsgDeposit.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.gov.v1beta1.MsgDeposit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.gov.v1beta1.MsgDeposit.toObject = function (includeInstance, msg) {
    let f; const
      obj = {
        proposalId: jspb.Message.getFieldWithDefault(msg, 1, 0),
        depositor: jspb.Message.getFieldWithDefault(msg, 2, ''),
        amountList: jspb.Message.toObjectList(msg.getAmountList(),
          cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
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
 * @return {!proto.cosmos.gov.v1beta1.MsgDeposit}
 */
proto.cosmos.gov.v1beta1.MsgDeposit.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.gov.v1beta1.MsgDeposit();
  return proto.cosmos.gov.v1beta1.MsgDeposit.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.gov.v1beta1.MsgDeposit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.gov.v1beta1.MsgDeposit}
 */
proto.cosmos.gov.v1beta1.MsgDeposit.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    const field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setProposalId(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setDepositor(value);
        break;
      case 3:
        var value = new cosmos_base_v1beta1_coin_pb.Coin();
        reader.readMessage(value, cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
        msg.addAmount(value);
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
proto.cosmos.gov.v1beta1.MsgDeposit.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.gov.v1beta1.MsgDeposit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.gov.v1beta1.MsgDeposit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.gov.v1beta1.MsgDeposit.serializeBinaryToWriter = function (message, writer) {
  let f;
  f = message.getProposalId();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f,
    );
  }
  f = message.getDepositor();
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
};

/**
 * optional uint64 proposal_id = 1;
 * @return {number}
 */
proto.cosmos.gov.v1beta1.MsgDeposit.prototype.getProposalId = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/** @param {number} value */
proto.cosmos.gov.v1beta1.MsgDeposit.prototype.setProposalId = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string depositor = 2;
 * @return {string}
 */
proto.cosmos.gov.v1beta1.MsgDeposit.prototype.getDepositor = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.cosmos.gov.v1beta1.MsgDeposit.prototype.setDepositor = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * repeated cosmos.base.v1beta1.Coin amount = 3;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.cosmos.gov.v1beta1.MsgDeposit.prototype.getAmountList = function () {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 3));
};

/** @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value */
proto.cosmos.gov.v1beta1.MsgDeposit.prototype.setAmountList = function (value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.cosmos.gov.v1beta1.MsgDeposit.prototype.addAmount = function (opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};

proto.cosmos.gov.v1beta1.MsgDeposit.prototype.clearAmountList = function () {
  this.setAmountList([]);
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
proto.cosmos.gov.v1beta1.MsgDepositResponse = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.gov.v1beta1.MsgDepositResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.cosmos.gov.v1beta1.MsgDepositResponse.displayName = 'proto.cosmos.gov.v1beta1.MsgDepositResponse';
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
  proto.cosmos.gov.v1beta1.MsgDepositResponse.prototype.toObject = function (opt_includeInstance) {
    return proto.cosmos.gov.v1beta1.MsgDepositResponse.toObject(opt_includeInstance, this);
  };

  /**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.gov.v1beta1.MsgDepositResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
  proto.cosmos.gov.v1beta1.MsgDepositResponse.toObject = function (includeInstance, msg) {
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
 * @return {!proto.cosmos.gov.v1beta1.MsgDepositResponse}
 */
proto.cosmos.gov.v1beta1.MsgDepositResponse.deserializeBinary = function (bytes) {
  const reader = new jspb.BinaryReader(bytes);
  const msg = new proto.cosmos.gov.v1beta1.MsgDepositResponse();
  return proto.cosmos.gov.v1beta1.MsgDepositResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.gov.v1beta1.MsgDepositResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.gov.v1beta1.MsgDepositResponse}
 */
proto.cosmos.gov.v1beta1.MsgDepositResponse.deserializeBinaryFromReader = function (msg, reader) {
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
proto.cosmos.gov.v1beta1.MsgDepositResponse.prototype.serializeBinary = function () {
  const writer = new jspb.BinaryWriter();
  proto.cosmos.gov.v1beta1.MsgDepositResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.gov.v1beta1.MsgDepositResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.gov.v1beta1.MsgDepositResponse.serializeBinaryToWriter = function (message, writer) {
  const f;
};

goog.object.extend(exports, proto.cosmos.gov.v1beta1);
