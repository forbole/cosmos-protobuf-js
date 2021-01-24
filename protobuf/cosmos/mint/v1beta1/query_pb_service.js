// package: cosmos.mint.v1beta1
// file: cosmos/mint/v1beta1/query.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_mint_v1beta1_query_pb = require('./query_pb');

const Query = (function () {
  function Query() {}
  Query.serviceName = 'cosmos.mint.v1beta1.Query';
  return Query;
}());

Query.Params = {
  methodName: 'Params',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_mint_v1beta1_query_pb.QueryParamsRequest,
  responseType: cosmos_mint_v1beta1_query_pb.QueryParamsResponse,
};

Query.Inflation = {
  methodName: 'Inflation',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_mint_v1beta1_query_pb.QueryInflationRequest,
  responseType: cosmos_mint_v1beta1_query_pb.QueryInflationResponse,
};

Query.AnnualProvisions = {
  methodName: 'AnnualProvisions',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsRequest,
  responseType: cosmos_mint_v1beta1_query_pb.QueryAnnualProvisionsResponse,
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

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

QueryClient.prototype.inflation = function inflation(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.Inflation, {
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

QueryClient.prototype.annualProvisions = function annualProvisions(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.AnnualProvisions, {
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
