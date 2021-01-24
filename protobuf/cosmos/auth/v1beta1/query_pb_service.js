// package: cosmos.auth.v1beta1
// file: cosmos/auth/v1beta1/query.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_auth_v1beta1_query_pb = require('./query_pb');

const Query = (function () {
  function Query() {}
  Query.serviceName = 'cosmos.auth.v1beta1.Query';
  return Query;
}());

Query.Account = {
  methodName: 'Account',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryAccountRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryAccountResponse,
};

Query.Params = {
  methodName: 'Params',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_auth_v1beta1_query_pb.QueryParamsRequest,
  responseType: cosmos_auth_v1beta1_query_pb.QueryParamsResponse,
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.account = function account(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.Account, {
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
