// package: ibc.core.client.v1
// file: ibc/core/client/v1/query.proto

const { grpc } = require('@improbable-eng/grpc-web');
const ibc_core_client_v1_query_pb = require('./query_pb');

const Query = (function () {
  function Query() {}
  Query.serviceName = 'ibc.core.client.v1.Query';
  return Query;
}());

Query.ClientState = {
  methodName: 'ClientState',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryClientStateRequest,
  responseType: ibc_core_client_v1_query_pb.QueryClientStateResponse,
};

Query.ClientStates = {
  methodName: 'ClientStates',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryClientStatesRequest,
  responseType: ibc_core_client_v1_query_pb.QueryClientStatesResponse,
};

Query.ConsensusState = {
  methodName: 'ConsensusState',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryConsensusStateRequest,
  responseType: ibc_core_client_v1_query_pb.QueryConsensusStateResponse,
};

Query.ConsensusStates = {
  methodName: 'ConsensusStates',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryConsensusStatesRequest,
  responseType: ibc_core_client_v1_query_pb.QueryConsensusStatesResponse,
};

Query.ClientParams = {
  methodName: 'ClientParams',
  service: Query,
  requestStream: false,
  responseStream: false,
  requestType: ibc_core_client_v1_query_pb.QueryClientParamsRequest,
  responseType: ibc_core_client_v1_query_pb.QueryClientParamsResponse,
};

exports.Query = Query;

function QueryClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

QueryClient.prototype.clientState = function clientState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.ClientState, {
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

QueryClient.prototype.clientStates = function clientStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.ClientStates, {
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

QueryClient.prototype.consensusState = function consensusState(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.ConsensusState, {
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

QueryClient.prototype.consensusStates = function consensusStates(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.ConsensusStates, {
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

QueryClient.prototype.clientParams = function clientParams(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Query.ClientParams, {
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
