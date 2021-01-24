// package: cosmos.bank.v1beta1
// file: cosmos/bank/v1beta1/tx.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_bank_v1beta1_tx_pb = require('./tx_pb');

const Msg = (function () {
  function Msg() {}
  Msg.serviceName = 'cosmos.bank.v1beta1.Msg';
  return Msg;
}());

Msg.Send = {
  methodName: 'Send',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_tx_pb.MsgSend,
  responseType: cosmos_bank_v1beta1_tx_pb.MsgSendResponse,
};

Msg.MultiSend = {
  methodName: 'MultiSend',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_bank_v1beta1_tx_pb.MsgMultiSend,
  responseType: cosmos_bank_v1beta1_tx_pb.MsgMultiSendResponse,
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.send = function send(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.Send, {
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

MsgClient.prototype.multiSend = function multiSend(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.MultiSend, {
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
