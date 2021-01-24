// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/tx.proto

const { grpc } = require('@improbable-eng/grpc-web');
const ibc_applications_transfer_v1_tx_pb = require('./tx_pb');

const Msg = (function () {
  function Msg() {}
  Msg.serviceName = 'ibc.applications.transfer.v1.Msg';
  return Msg;
}());

Msg.Transfer = {
  methodName: 'Transfer',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_tx_pb.MsgTransfer,
  responseType: ibc_applications_transfer_v1_tx_pb.MsgTransferResponse,
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.transfer = function transfer(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.Transfer, {
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
