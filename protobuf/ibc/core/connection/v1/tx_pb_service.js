// package: ibc.core.connection.v1
// file: ibc/core/connection/v1/tx.proto

const { grpc } = require('@improbable-eng/grpc-web');
const ibc_core_connection_v1_tx_pb = require('./tx_pb');

const Msg = (function () {
  function Msg() {}
  Msg.serviceName = 'ibc.core.connection.v1.Msg';
  return Msg;
}());

Msg.ConnectionOpenInit = {
  methodName: 'ConnectionOpenInit',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit,
  responseType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInitResponse,
};

Msg.ConnectionOpenTry = {
  methodName: 'ConnectionOpenTry',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry,
  responseType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTryResponse,
};

Msg.ConnectionOpenAck = {
  methodName: 'ConnectionOpenAck',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck,
  responseType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAckResponse,
};

Msg.ConnectionOpenConfirm = {
  methodName: 'ConnectionOpenConfirm',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm,
  responseType: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirmResponse,
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.connectionOpenInit = function connectionOpenInit(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.ConnectionOpenInit, {
    request: requestMessage,
    host: this.serviceHost,
    metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          const err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel() {
      callback = null;
      client.close();
    },
  };
};

MsgClient.prototype.connectionOpenTry = function connectionOpenTry(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.ConnectionOpenTry, {
    request: requestMessage,
    host: this.serviceHost,
    metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          const err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel() {
      callback = null;
      client.close();
    },
  };
};

MsgClient.prototype.connectionOpenAck = function connectionOpenAck(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.ConnectionOpenAck, {
    request: requestMessage,
    host: this.serviceHost,
    metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          const err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel() {
      callback = null;
      client.close();
    },
  };
};

MsgClient.prototype.connectionOpenConfirm = function connectionOpenConfirm(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.ConnectionOpenConfirm, {
    request: requestMessage,
    host: this.serviceHost,
    metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          const err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel() {
      callback = null;
      client.close();
    },
  };
};

exports.MsgClient = MsgClient;
