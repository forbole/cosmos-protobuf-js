// package: ibc.applications.transfer.v1
// file: ibc/applications/transfer/v1/query.proto

const { grpc } = require('@improbable-eng/grpc-web');
const ibc_applications_transfer_v1_query_pb = require('./query_pb');

const Query = (function () {
  function Query() {}
  Query.serviceName = 'ibc.applications.transfer.v1.Query';
  return Query;
}());

Query.DenomTrace = {
  methodName: 'DenomTrace',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryDenomTraceRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryDenomTraceResponse,
};

Query.DenomTraces = {
  methodName: 'DenomTraces',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryDenomTracesRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryDenomTracesResponse,
};

Query.Params = {
  methodName: 'Params',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_applications_transfer_v1_query_pb.QueryParamsRequest,
  responseType: ibc_applications_transfer_v1_query_pb.QueryParamsResponse,
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.denomTrace = function denomTrace(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.DenomTrace, {
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

QueryClient.prototype.denomTraces = function denomTraces(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.DenomTraces, {
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

QueryClient.prototype.params = function params(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.Params, {
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
