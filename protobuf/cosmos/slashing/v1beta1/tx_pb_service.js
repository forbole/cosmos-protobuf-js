// package: cosmos.slashing.v1beta1
// file: cosmos/slashing/v1beta1/tx.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_slashing_v1beta1_tx_pb = require('./tx_pb');

const Msg = (function () {
  function Msg() {}
  Msg.serviceName = 'cosmos.slashing.v1beta1.Msg';
  return Msg;
}());

Msg.Unjail = {
  methodName: 'Unjail',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_slashing_v1beta1_tx_pb.MsgUnjail,
  responseType: cosmos_slashing_v1beta1_tx_pb.MsgUnjailResponse,
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.unjail = function unjail(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.Unjail, {
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
