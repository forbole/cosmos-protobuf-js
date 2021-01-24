// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/tx.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_evidence_v1beta1_tx_pb = require('./tx_pb');

const Msg = (function () {
  function Msg() {}
  Msg.serviceName = 'cosmos.evidence.v1beta1.Msg';
  return Msg;
}());

Msg.SubmitEvidence = {
  methodName: 'SubmitEvidence',
  service: Msg,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidence,
  responseType: cosmos_evidence_v1beta1_tx_pb.MsgSubmitEvidenceResponse,
};

exports.Msg = Msg;

function MsgClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MsgClient.prototype.submitEvidence = function submitEvidence(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Msg.SubmitEvidence, {
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
