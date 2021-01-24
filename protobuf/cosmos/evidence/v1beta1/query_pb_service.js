// package: cosmos.evidence.v1beta1
// file: cosmos/evidence/v1beta1/query.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_evidence_v1beta1_query_pb = require('./query_pb');

const Query = (function () {
  function Query() {}
  Query.serviceName = 'cosmos.evidence.v1beta1.Query';
  return Query;
}());

Query.Evidence = {
  methodName: 'Evidence',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_evidence_v1beta1_query_pb.QueryEvidenceRequest,
  responseType: cosmos_evidence_v1beta1_query_pb.QueryEvidenceResponse,
};

Query.AllEvidence = {
  methodName: 'AllEvidence',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceRequest,
  responseType: cosmos_evidence_v1beta1_query_pb.QueryAllEvidenceResponse,
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.evidence = function evidence(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.Evidence, {
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

QueryClient.prototype.allEvidence = function allEvidence(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.AllEvidence, {
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

exports.QueryClient = QueryClient;
