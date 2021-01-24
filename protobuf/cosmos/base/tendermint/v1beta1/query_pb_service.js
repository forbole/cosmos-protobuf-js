// package: cosmos.base.tendermint.v1beta1
// file: cosmos/base/tendermint/v1beta1/query.proto

const { grpc } = require('@improbable-eng/grpc-web');
const cosmos_base_tendermint_v1beta1_query_pb = require('./query_pb');

const Service = (function () {
  function Service() {}
  Service.serviceName = 'cosmos.base.tendermint.v1beta1.Service';
  return Service;
}());

Service.GetNodeInfo = {
  methodName: 'GetNodeInfo',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoRequest,
  responseType: cosmos_base_tendermint_v1beta1_query_pb.GetNodeInfoResponse,
};

Service.GetSyncing = {
  methodName: 'GetSyncing',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingRequest,
  responseType: cosmos_base_tendermint_v1beta1_query_pb.GetSyncingResponse,
};

Service.GetLatestBlock = {
  methodName: 'GetLatestBlock',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockRequest,
  responseType: cosmos_base_tendermint_v1beta1_query_pb.GetLatestBlockResponse,
};

Service.GetBlockByHeight = {
  methodName: 'GetBlockByHeight',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightRequest,
  responseType: cosmos_base_tendermint_v1beta1_query_pb.GetBlockByHeightResponse,
};

Service.GetLatestValidatorSet = {
  methodName: 'GetLatestValidatorSet',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetRequest,
  responseType: cosmos_base_tendermint_v1beta1_query_pb.GetLatestValidatorSetResponse,
};

Service.GetValidatorSetByHeight = {
  methodName: 'GetValidatorSetByHeight',
  service: Service,
  requestStream: false,
  responseStream: false,
  requestType: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightRequest,
  responseType: cosmos_base_tendermint_v1beta1_query_pb.GetValidatorSetByHeightResponse,
};

exports.Service = Service;

function ServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ServiceClient.prototype.getNodeInfo = function getNodeInfo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.GetNodeInfo, {
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

ServiceClient.prototype.getSyncing = function getSyncing(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.GetSyncing, {
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

ServiceClient.prototype.getLatestBlock = function getLatestBlock(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.GetLatestBlock, {
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

ServiceClient.prototype.getBlockByHeight = function getBlockByHeight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.GetBlockByHeight, {
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

ServiceClient.prototype.getLatestValidatorSet = function getLatestValidatorSet(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.GetLatestValidatorSet, {
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

ServiceClient.prototype.getValidatorSetByHeight = function getValidatorSetByHeight(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  const client = grpc.unary(Service.GetValidatorSetByHeight, {
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

exports.ServiceClient = ServiceClient;
